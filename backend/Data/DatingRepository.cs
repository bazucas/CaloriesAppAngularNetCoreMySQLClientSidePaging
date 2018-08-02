using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Helpers;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DatingRepository : IDatingRepository
    {
        private readonly DataContext _context;

        public DatingRepository(DataContext context)
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

        public Task<Photo> GetMainPhotoForUser(int userId)
        {
            throw new NotImplementedException();
        }

        public async Task<Meal> GetMeal(int id)
        {
            var meal = await _context.Meals.FirstOrDefaultAsync(p => p.Id == id);
            
            return meal;
        }

        public Task<Photo> GetPhoto(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public Task<bool> SaveAll()
        {
            throw new NotImplementedException();
        }
    }
}