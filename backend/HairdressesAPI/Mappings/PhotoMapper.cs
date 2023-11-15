using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using Riok.Mapperly.Abstractions;

namespace HairdressesAPI.Mappings
{
    [Mapper]
    public static partial class PhotoMapper
    {
        public static partial PhotoDTO? MapPhotoToPhotoDTO(this PhotoInfo? address);
        public static partial PhotoInfo? MapPhotoDTOToPhoto(this PhotoDTO? addressDTO);
    }
}