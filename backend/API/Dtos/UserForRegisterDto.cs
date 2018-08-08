using System;
using System.ComponentModel.DataAnnotations;
using API.Enum;

namespace API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify a password between 4 and 8 characters")]
        public string Password { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public int Calories { get; set; }

        [Required]
        public RoleEnum Role { get; set; } = RoleEnum.User;

        public DateTime Created { get; set; }  

        public UserForRegisterDto()
        {
            Created = DateTime.Now;
        }
    }
}