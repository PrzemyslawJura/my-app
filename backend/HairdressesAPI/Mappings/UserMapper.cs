using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using Riok.Mapperly.Abstractions;

namespace HairdressesAPI.Mappings
{
    [Mapper]
    public static partial class UserMapper
    {
        public static partial UserDTO? MapUserToUserDTO(this User? salon);
        public static partial User? MapUserDTOToUser(this UserDTO? salonDTO);
    }
}
