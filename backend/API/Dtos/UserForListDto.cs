using System;
using API.Enum;

namespace API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public RoleEnum Role { get; set; }
        public DateTime Created { get; set; }
    }
}