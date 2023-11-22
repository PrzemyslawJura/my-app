﻿using HairdressesAPI.Mappings;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services.Abstraction;

namespace HairdressesAPI.Services
{
    public class ServiceService : IServiceService
    {
        private readonly IApplicationDbContext _context;

        public ServiceService(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task AddAsync(Service service, CancellationToken cancellationToken)
        {
            _context.Services.Add(service.MapServiceToServiceDTO());

            await _context.SaveChangesAsync();
        }

        public Task<Service> GetAllAsync(CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<Service> GetByIdAsync(int id, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<Service> GetByNameAsync(string name, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }

}
