using HairdressesAPI.DTOs;
using HairdressesAPI.Models;

namespace HairdressesAPI.Services.Abstraction
{
    public interface IAddressService
    {
        Task AddAsync(Address address, CancellationToken cancellationToken);
        Task<Address> GetByIdAsync(int id, CancellationToken cancellationToken);
        Task<IEnumerable<Address>> GetByCityIdAsync(int cityId, CancellationToken cancellationToken);
        Task<IEnumerable<Address>> GetAllAsync(CancellationToken cancellationToken);
        Task UpdateAsync(Address address, CancellationToken cancellationToken);
        Task DeleteAsync(Address address, CancellationToken cancellationToken);
    }
}
