using HairdressesAPI.Models;

namespace HairdressesAPI.Services.Abstraction
{
    public interface IWorkerService
    {
        Task AddAsync(Worker worker, CancellationToken cancellationToken);
        Task<Worker> GetByIdAsync(int id, CancellationToken cancellationToken);
        Task<Worker> GetByNameAsync(string name, CancellationToken cancellationToken);
        Task<IEnumerable<Worker>> GetAllAsync(CancellationToken cancellationToken);
        Task<IEnumerable<Worker>> GetAllBySalonIdAsync(int salonid, CancellationToken cancellationToken);
    }
}
