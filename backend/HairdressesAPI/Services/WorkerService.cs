using HairdressesAPI.Mappings;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services.Abstraction;
using Microsoft.EntityFrameworkCore;

namespace HairdressesAPI.Services
{
    public class WorkerService : IWorkerService
    {
        private readonly IApplicationDbContext _context;

        public WorkerService(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task AddAsync(Worker worker, CancellationToken cancellationToken)
        {

            var entity = worker.MapWorkerToWorkerDTO();

            _context.Workers.Add(entity);

            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Worker>> GetAllAsync(CancellationToken cancellationToken)
        {
            var result = await _context.Workers.Select(x => x.MapWorkerDTOToWorker()).ToListAsync();

            return result;
        }

        public Task<Worker> GetByIdAsync(int id, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<Worker> GetByNameAsync(string name, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
