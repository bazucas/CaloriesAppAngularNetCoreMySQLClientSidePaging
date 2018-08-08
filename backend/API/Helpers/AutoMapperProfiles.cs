using System.Linq;
using API.Dtos;
using API.Models;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            
            CreateMap<User, UserRegistedDto>();

            CreateMap<Meal, MealRegistedDto>();

            CreateMap<UserForUpdateDto, User>();

            CreateMap<MealForCreationDto, Meal>();

            CreateMap<Meal, MealForReturnDto>();

            CreateMap<UserForRegisterDto, User>();
        }
    }
}
