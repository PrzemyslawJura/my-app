using HairdressesAPI.DTOs;
using HairdressesAPI.Mappings;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services.Abstraction;
using Microsoft.EntityFrameworkCore;

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

        public async Task<IEnumerable<Salon>> GetAllAsync(CancellationToken cancellationToken)
        {
            var result = await _context.Salons.Select(x => x.MapSalonDTOToSalon()).ToListAsync();

            return result;
        }

        public async Task<SalonDTO?> GetByIdAsync(int id, CancellationToken cancellationToken)
        {
            var result = _context.Salons
                                .Include(x => x.Photos)
                                .Include(x => x.Workers)
                                    .ThenInclude(x => x.Service)
                                .Include(x => x.Address)
                                    .ThenInclude(x => x.City);

            var mainResult = result.FirstOrDefaultAsync(i => i.Id == id, cancellationToken).Result;

            return mainResult;
        }

        public async Task<Salon?> GetByNameAsync(string name, CancellationToken cancellationToken)
        {
            var result = await _context.Salons
                .Include(x => x.Photos)
                .Include(x => x.Address)
                    .ThenInclude(x => x.City)
                .FirstOrDefaultAsync(i => i.Name == name, cancellationToken);

            return result.MapSalonDTOToSalon();
        }
    }
}
