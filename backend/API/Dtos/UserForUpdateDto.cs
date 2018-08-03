using System;
using System.Collections.Generic;
using API.Enum;
using API.Models;

namespace API.Dtos
{
    public class UserForUpdateDto
    {
        public string Username { get; set; }
        public RoleEnum Role { get; set; }
    }
}