using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;

namespace HairdressesAPI.Persistent.Abstraction
{
    public interface IApplicationDbContext
    {
        DbSet<AddressDTO> Addresses { get; }
        DbSet<CityDTO> Cities { get; }
        DbSet<PhotoDTO> Photos { get; }
        DbSet<ReviewDTO> Reviews { get; }
        DbSet<SalonDTO> Salons { get; }
        DbSet<ServiceDTO> Services { get; }
        DbSet<UserDTO> Users { get; }
        DbSet<VisitDTO> Visits { get; }
        DbSet<WorkerDTO> Workers { get; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}
