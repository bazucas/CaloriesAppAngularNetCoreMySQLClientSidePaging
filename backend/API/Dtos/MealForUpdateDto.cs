using System;
using System.Collections.Generic;
using API.Enum;
using API.Models;

namespace API.Dtos
{
    public class MealForUpdateDto
    {
        public int UserId { get; set; }
        public int MealId { get; set; }
    }
}