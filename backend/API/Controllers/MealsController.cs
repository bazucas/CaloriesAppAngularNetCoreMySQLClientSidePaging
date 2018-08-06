using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using API.Helpers;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Newtonsoft.Json;

namespace API.Controllers
{
    // [Authorize]
    [Route("api/users/{userId}/meals")]
    [ApiController]
    public class MealsController : ControllerBase
    {
        private readonly ILkRepository _repo;
        private readonly IMapper _mapper;
        public MealsController(ILkRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetMeals(int userId)
        {
            var meals = await _repo.GetMeals(userId);

            var mealsToReturn = _mapper.Map<IEnumerable<Meal>>(meals);

            return Ok(mealsToReturn);
        }

        [HttpGet("{mealId}", Name = "GetMeals")]
        public async Task<IActionResult> GetMeal(int userId, int mealId)
        {
            var meal = await _repo.GetMeal(userId, mealId);

            var mealToReturn = _mapper.Map<Meal>(meal);

            return Ok(mealToReturn);
        }

        [HttpPost]
        public async Task<IActionResult> AddMeal([FromBody] Meal meal)
        {
            _repo.Add<Meal>(meal); 

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Deleting meal {meal.Id} failed");
        }

        [HttpPut]
        public async Task<IActionResult> UpdateMeal(int userId, [FromBody] Meal meal)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var mealFromRepo = await _repo.GetMeal(userId, meal.Id);

            if (mealFromRepo == null)
                return NotFound($"Could not find the meal with the Id: {meal.Id}");

            // if (currentUserId != userFromRepo.Id)
            //     return Unauthorized();

            _mapper.Map(meal, mealFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating meal {meal.Id} failed");
        }
        
        [HttpDelete("{mealId}")]
        public async Task<IActionResult> DeleteMeal(int userId, int mealId) 
        { 
            var mealFromRepo = await _repo.GetMeal(userId, mealId);

            _repo.Delete<Meal>(mealFromRepo); 

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Deleting meal {userId} failed");
        } 
    }
}