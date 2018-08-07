using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Helpers;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class LkRepository : ILkRepository
    {
        private readonly DataContext _context;

        public LkRepository(DataContext context) => _context = context;
        
        public void Add<T>(T entity) where T : class => _context.Add(entity);

        public void Delete<T>(T entity) where T : class => _context.Remove(entity);

        public async Task<User> GetUser(int idUser) => await _context.Users.FirstOrDefaultAsync(u => u.Id == idUser);

        public async Task<IEnumerable<User>> GetUsers() => await _context.Users.OrderBy(u => u.Username).ToListAsync();

        public async Task<Meal> GetMeal(int idUser, int idMeal) => await _context.Users.Include(p => p.Meals).Where(u => u.Id == idUser).SelectMany(m => m.Meals).Where(m => m.Id == idMeal).FirstOrDefaultAsync();

        public async Task<IEnumerable<Meal>> GetMeals(int idUser) => await _context.Users.Include(p => p.Meals).Where(u => u.Id == idUser).SelectMany(m => m.Meals).ToListAsync();

        public async Task<bool> SaveAll() => await _context.SaveChangesAsync() > 0;
    }
}