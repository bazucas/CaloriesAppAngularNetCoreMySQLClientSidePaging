using System;
using System.Collections.Generic;
using API.Enum;
using API.Models;

namespace API.Dtos
{
    public class MealForReturnDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int Calories { get; set; }
        public DateTime Added { get; set; }
    }
}