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
    [Route("api/[controller]")]
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

        // [HttpGet]
        // public async Task<IActionResult> GetMeals([FromQuery] MealParams mealParams)
        // {
        //     var users = await _repo.GetMeals(mealParams);

        //     var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

        //     Response.AddPagination(users.CurrentPage, users.PageSize, users.TotalCount, users.TotalPages);

        //     return Ok(usersToReturn);
        // }

        // [HttpGet("{id}", Name = "GetMeal")]
        // public async Task<IActionResult> GetMeal(int id)
        // {
        //     var user = await _repo.GetMeal(id);

        //     var userToReturn = _mapper.Map<UserRegistedDto>(user);

        //     return Ok(userToReturn);
        // }

        // [HttpPut("{id}")]
        // public async Task<IActionResult> UpdateMeals(int id, [FromBody] MealForUpdateDto mealforUpdateDto)
        // {
        //     if (!ModelState.IsValid)
        //         return BadRequest(ModelState);

        //     // var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

        //     var userFromRepo = await _repo.GetMeal(id);

        //     if (userFromRepo == null)
        //         return NotFound($"Could not find user with an Id {id}");

        //     // if (currentUserId != userFromRepo.Id)
        //     //     return Unauthorized();

        //     _mapper.Map(mealforUpdateDto, userFromRepo);

        //     if (await _repo.SaveAll())
        //         return NoContent();

        //     throw new Exception($"Updating user {id} failed on save");
        // }
    }
}