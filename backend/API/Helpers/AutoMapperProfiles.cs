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
            
            CreateMap<UserForUpdateDto, User>();

            CreateMap<UserForRegisterDto, User>();
        }
    }
}