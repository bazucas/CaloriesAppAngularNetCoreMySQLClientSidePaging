using System;
using System.Collections.Generic;
using API.Enum;
using API.Models;

namespace API.Dtos
{
    public class UserRegistedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public RoleEnum Role { get; set; }
    }
}