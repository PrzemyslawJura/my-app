using HairdressesAPI.DTOs;
using HairdressesAPI.Models;

namespace HairdressesAPI.Services.Abstraction
{
    public interface ICityService
    {
        Task<IEnumerable<City>> GetAllAsync(CancellationToken cancellationToken);
        Task<City?> GetByNameAsync(string name, CancellationToken cancellationToken);
        Task<City?> GetByIdAsync(int id, CancellationToken cancellationToken);
        Task AddAsync(City city, CancellationToken cancellationToken);
        
    }
}
