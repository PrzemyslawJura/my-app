using HairdressesAPI.DTOs;
using HairdressesAPI.Mappings;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services.Abstraction;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace HairdressesAPI.Services
{
    public class VisitService : IVisitService
    {
        private readonly IApplicationDbContext _context;

        public VisitService(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task AddAsync(Visit visit, CancellationToken cancellationToken)
        {
            var entity = visit.MapVisitToVisitDTO();

            _context.Visits.Add(entity);

            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<VisitInfo>> GetBySalonIdAsync(int salonId, CancellationToken cancellationToken)
        {
            var result = await _context.Visits.Where(x => x.SalonId == salonId).Select(x => x.MapVisitDTOToVisitInfo()).ToListAsync();

            return result;
        }
    }
}
