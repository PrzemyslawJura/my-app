using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using Riok.Mapperly.Abstractions;

namespace HairdressesAPI.Mappings
{
    [Mapper]
    public static partial class CityMapper
    {
        public static partial CityDTO? MapCityToCityDTO(this City? city);
        public static partial City? MapCityDTOToCity(this CityDTO? cityDTO);
    }
}
