using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Helpers;
using API.Models;

namespace API.Data
{
    public interface ILkRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();


        Task<User> GetUser(int idUser);

        Task<IEnumerable<User>> GetUsers();

        Task<User> UpdateUser(UserForRegisterDto user);


        Task<Meal> GetMeal(int idUser, int idMeal);

        Task<IEnumerable<Meal>> GetMeals(int idUser);

        Task<Meal> UpdateMeal(Meal meal);
    }
}