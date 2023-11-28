using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using Riok.Mapperly.Abstractions;

namespace HairdressesAPI.Mappings
{
    [Mapper]
    public static partial class RegisterUserMapper
    {
        public static partial RegisterUser? MapRegisterUserToUser(this User? salon);
        public static partial User? MapUserToRegisterUser(this RegisterUser? salonDTO);
    }
}
