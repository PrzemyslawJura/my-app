using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using Riok.Mapperly.Abstractions;

namespace HairdressesAPI.Mappings
{
    [Mapper]
    public static partial class VisitInfoMapper
    {
        public static partial VisitDTO? MapVisitInfoToVisitDTO(this VisitInfo? visit);
        public static partial VisitInfo? MapVisitDTOToVisitInfo(this VisitDTO? isitDTO);
    }
}