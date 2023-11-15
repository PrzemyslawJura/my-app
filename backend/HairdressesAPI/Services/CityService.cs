using HairdressesAPI.DTOs;
using HairdressesAPI.Mappings;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services.Abstraction;
using Microsoft.EntityFrameworkCore;

namespace HairdressesAPI.Services
{
    public class CityService : ICityService
    {
        private readonly IApplicationDbContext _context;

        public CityService(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task AddAsync(City city, CancellationToken cancellationToken)
        {
            var entity = new CityDTO {CityName = city.CityName, Country = city.Country};

            _context.Cities.Add(entity);

            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<City>> GetAllAsync(CancellationToken cancellationToken)
        {
            var result = await _context.Cities.Select(x => x.MapCityDTOToCity()).ToListAsync();

            return result;
        }

        public async Task<City?> GetByIdAsync(int id, CancellationToken cancellationToken)
        {
            var result = await _context.Cities.FirstOrDefaultAsync(i => i.Id == id, cancellationToken);

            return result.MapCityDTOToCity();
        }

        public async Task<City?> GetByNameAsync(string name, CancellationToken cancellationToken)
        {
            var result = await _context.Cities.FirstOrDefaultAsync(i => i.CityName == name, cancellationToken);

            return result.MapCityDTOToCity();
        }
    }
}
