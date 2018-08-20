using System;
using System.Collections.Generic;
using API.Enum;
using API.Models;

namespace API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public int Calories { get; set; }
        public RoleEnum Role { get; set; }
        public DateTime Created { get; set; }
        public ICollection<Meal> Meals { get; set; }
    }
}