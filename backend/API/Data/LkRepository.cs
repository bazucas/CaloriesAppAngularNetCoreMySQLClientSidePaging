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

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.Meals).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }
        
        public async Task<PagedList<User>> GetUsers(UserParams userParams)
        {
            var users = _context.Users.Include(p => p.Meals).OrderBy(u => u.Username).AsQueryable();

            users = users.Where(u => u.Id != userParams.Id);

            return await PagedList<User>.CreateAsync(users, userParams.PageNumber, userParams.PageSize);
        }

        // public async Task<Meal> GetMeal(int idUser, int idMeal)
        // {
        //     var meal = await _context.Users.Where(u => u.Id == idUser).SelectMany(m => m.Meals).Where(m => m.Id == idMeal).FirstOrDefaultAsync();
            
        //     return meal;
        // }

        // public async Task<PagedList<Meal>> GetMeals(int id)
        // {
        //     var meals =  await _context.Meals.Where(m => m.Id == id).ToListAsync();
            
        //     return await PagedList<User>.CreateAsync(meals, mealParams.PageNumber, userParams.PageSize);

        // }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}