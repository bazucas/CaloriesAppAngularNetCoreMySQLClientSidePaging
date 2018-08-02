using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Helpers;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class LkRepository : ILkRepository
    {
        private readonly DataContext _context;

        public LkRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Meal> GetMeal(int id)
        {
            var meal = await _context.Meals.FirstOrDefaultAsync(p => p.Id == id);
            
            return meal;
        }

        public async Task<IEnumerable<Meal>> GetMeals(int id)
        {
            var meals =  await _context.Meals.Where(m => m.Id == id).ToListAsync();
            
            return meals;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.Meals).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}