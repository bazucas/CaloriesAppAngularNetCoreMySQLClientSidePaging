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
    public class UsersController : ControllerBase
    {
        private readonly ILkRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(ILkRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            return Ok(usersToReturn);
        }

        [HttpGet("{userId}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);

            var userToReturn = _mapper.Map<UserForListDto>(user);

            return Ok(userToReturn);
        }

        [HttpPost]
        public async Task<IActionResult> AddUser([FromBody] Meal meal)
        {
            _repo.Add<Meal>(meal); 

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Deleting meal {meal.Id} failed");
        }

        [HttpPut("{userId}")]
        public async Task<IActionResult> UpdateUser(int userId, [FromBody] UserForUpdateDto userforUpdateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var userFromRepo = await _repo.GetUser(userId);

            if (userFromRepo == null)
                return NotFound($"Could not find user with an Id {userId}");

            // if (currentUserId != userFromRepo.Id)
            //     return Unauthorized();

            _mapper.Map(userforUpdateDto, userFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating user {userId} failed");
        }

        [HttpDelete("{userId}")]
        public async Task<IActionResult> DeleteUser(int userId) 
        { 
            var userFromRepo = await _repo.GetUser(userId);

            _repo.Delete<User>(userFromRepo); 

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Deleting user {userId} failed");
        } 
    }
}
