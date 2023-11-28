using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using Riok.Mapperly.Abstractions;

namespace HairdressesAPI.Mappings
{
    [Mapper]
    public static partial class VisitMapper
    {
        public static partial VisitDTO? MapVisitToVisitDTO(this Visit? visit);
        public static partial Visit? MapVisitDTOToVisit(this VisitDTO? isitDTO);
    }
}
