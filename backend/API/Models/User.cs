using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using API.Enum;

namespace API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public RoleEnum Role { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime Created { get; set; }

        public ICollection<Meal> Meals { get; set; }
    }
}