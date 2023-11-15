using HairdressesAPI.DTOs;
using HairdressesAPI.Mappings;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services.Abstraction;

namespace HairdressesAPI.Services
{
    public class SalonService : ISalonService
    {
        private readonly IApplicationDbContext _context;

        public SalonService(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task AddAsync(Salon salon, CancellationToken cancellationToken)
        {
            var entity = salon.MapSalonToSalonDTO();

            _context.Salons.Add(entity);

            await _context.SaveChangesAsync();
        }
    }
}
