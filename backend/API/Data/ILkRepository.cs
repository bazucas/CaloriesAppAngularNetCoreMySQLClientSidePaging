using System.Collections.Generic;
using System.Threading.Tasks;
using API.Helpers;
using API.Models;

namespace API.Data
{
    public interface ILkRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();

        Task<User> GetUser(int id);

        Task<PagedList<User>> GetUsers(UserParams userParams);

        Task<Meal> GetMeal(int id);

        Task<IEnumerable<Meal>> GetMeals(int id);
    }
}