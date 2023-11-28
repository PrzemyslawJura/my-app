using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using Riok.Mapperly.Abstractions;

namespace HairdressesAPI.Mappings
{
    [Mapper]
    public static partial class RegisterSalonMapper
    {
        public static partial RegisterSalon? MapSalonToRegisterSalon(this Salon? salon);
        public static partial Salon? MapRegisterSalonToSalon(this RegisterSalon? salonDTO);
    }
}
