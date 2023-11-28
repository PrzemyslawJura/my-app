using HairdressesAPI.DTOs;
using HairdressesAPI.Models;

namespace HairdressesAPI.Services.Abstraction
{
    public interface IVisitService
    {
        Task AddAsync(Visit visit, CancellationToken cancellationToken);
        Task<IEnumerable<VisitInfo>> GetBySalonIdAsync(int salonId, CancellationToken cancellationToken);
    }
}
