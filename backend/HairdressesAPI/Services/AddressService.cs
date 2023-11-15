using HairdressesAPI.DTOs;
using HairdressesAPI.Mappings;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services.Abstraction;
using Microsoft.EntityFrameworkCore;

namespace HairdressesAPI.Services
{
    public class AddressService : IAddressService
    {
        private readonly IApplicationDbContext _context;

        public AddressService(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task AddAsync(Address address, CancellationToken cancellationToken)
        {
            var entity = address.MapAddressToAddressDTO();

            _context.Addresses.Add(entity);

            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Address address, CancellationToken cancellationToken)
        {
            var entity = address.MapAddressToAddressDTO();

            _context.Addresses.Update(entity);

            await _context.SaveChangesAsync();
        }

        public Task DeleteAsync(Address address, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Address>> GetAllAsync(CancellationToken cancellationToken)
        {
            var result = await _context.Addresses.Select(x => x.MapAddressDTOToAddress()).ToListAsync();

            return result;
        }

        public async Task<IEnumerable<Address>> GetByCityIdAsync(int cityId, CancellationToken cancellationToken)
        {
            return await _context.Addresses.Where(i => i.CityId == cityId).Select(x => x.MapAddressDTOToAddress()).ToListAsync(cancellationToken);
        }

        public async Task<Address> GetByIdAsync(int id, CancellationToken cancellationToken)
        {
            var result = await _context.Addresses.FirstOrDefaultAsync(i => i.Id == id, cancellationToken);

            return result.MapAddressDTOToAddress();
        }
    }
}
