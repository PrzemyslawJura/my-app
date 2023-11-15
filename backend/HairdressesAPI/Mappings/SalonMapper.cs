using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using Riok.Mapperly.Abstractions;

namespace HairdressesAPI.Mappings
{
    [Mapper]
    public static partial class SAlonMapper
    {
        public static partial SalonDTO? MapSalonToSalonDTO(this Salon? salon);
        public static partial Salon? MapSalonDTOToSalon(this SalonDTO? salonDTO);
    }
}