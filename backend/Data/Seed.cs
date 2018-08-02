using System.Collections.Generic;
using System.Linq;
using API.Models;
using Newtonsoft.Json;

namespace API.Data
{
    public class Seed
    {
        private readonly DataContext _context;
        public Seed(DataContext context)
        {
            _context = context;
        }

        public void SeedUsers()
        {
            if(!_context.Users.Any())
            {
                // delete persisted users in db
            _context.Users.RemoveRange(_context.Users);
            _context.SaveChanges();

            // seed users
            var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
            var users = JsonConvert.DeserializeObject<List<User>>(userData);

            foreach (var user in users) 
            {
                // create the password hash
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash("password", out passwordHash, out passwordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.Username = user.Username.ToLower();

                _context.Users.Add(user);
            }

            _context.SaveChanges();
            }
        }

           public void SeedMeals()
        {
            if(!_context.Meals.Any())
            {
                // delete persisted meals in db
            _context.Meals.RemoveRange(_context.Meals);
            _context.SaveChanges();

            // seed meals
            var mealData = System.IO.File.ReadAllText("Data/MealSeedData.json");
            var meals = JsonConvert.DeserializeObject<List<Meal>>(mealData);

            foreach (var meal in meals) 
            {
                meal.Description = "";
                meal.Added = System.DateTime.Now;
                meal.UserId = 1;

                _context.Meals.Add(meal);
            }

            _context.SaveChanges();
            }
        }


        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512()){
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}