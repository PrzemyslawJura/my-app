using HairdressesAPI.Models;

namespace HairdressesAPI.Services.Abstraction
{
    public interface IServiceService
    {
        Task AddAsync(Service service, CancellationToken cancellationToken);
        Task<Service> GetByIdAsync(int id, CancellationToken cancellationToken);
        Task<Service> GetByNameAsync(string name, CancellationToken cancellationToken);
        Task<Service> GetAllAsync(CancellationToken cancellationToken);
        Task<IEnumerable<Service>> GetByWorkerIdAsync(int id, CancellationToken cancellationToken);
    }
}
