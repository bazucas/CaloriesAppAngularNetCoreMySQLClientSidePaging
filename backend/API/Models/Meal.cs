using System;

namespace API.Models
{
    public class Meal
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int Calories { get; set; }
        public DateTime Added { get; set; }
        public int UserId { get; set; }
    }
}