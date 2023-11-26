using HairdressesAPI.DTOs;
using HairdressesAPI.Models;

namespace HairdressesAPI.Services.Abstraction
{
    public interface ISalonService
    {
        Task AddAsync(Salon salon, CancellationToken cancellationToken);
        Task<Salon?> GetByNameAsync(string name, CancellationToken cancellationToken);
        Task<SalonDTO?> GetByIdAsync(int id, CancellationToken cancellationToken);
        Task<IEnumerable<Salon>> GetAllAsync(CancellationToken cancellationToken);
    }
}
