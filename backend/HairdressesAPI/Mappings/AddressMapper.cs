using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using Riok.Mapperly.Abstractions;

namespace HairdressesAPI.Mappings
{
    [Mapper]
    public static partial class AddressMapper
    {
        [MapperIgnoreSource(nameof(Address.CityName))]
        public static partial AddressDTO? MapAddressToAddressDTO(this Address? address);
        public static partial Address? MapAddressDTOToAddress(this AddressDTO? addressDTO);
    }
}
