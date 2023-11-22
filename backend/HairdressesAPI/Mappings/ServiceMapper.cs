using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using Riok.Mapperly.Abstractions;

namespace HairdressesAPI.Mappings
{
    [Mapper]
    public static partial class ServiceMapper
    {
        public static partial ServiceDTO? MapServiceToServiceDTO(this Service? service);
        public static partial Service? MapServiceDTOToService(this ServiceDTO? serviceDTO);
    }
}
