using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime Created { get; set; }

        public ICollection<Meal> Photos { get; set; }

        // public User() 
        // {
        //     Photos = new Collection<Photo>();
        // }
    }
}