using AutoMapper;
using Roar.UserAPI.Entities;
using Roar.UserAPI.Models;

namespace Roar.UserAPI.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserModel>();
            CreateMap<RegisterModel, User>();
            CreateMap<UpdateModel, User>();
        }
    }
}
