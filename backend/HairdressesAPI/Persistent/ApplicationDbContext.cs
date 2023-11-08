using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent.Abstraction;

namespace HairdressesAPI.Persistent
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public DbSet<AddressDTO> Addresses => Set<AddressDTO>();
        public DbSet<CityDTO> Cities => Set<CityDTO>();
        public DbSet<PhotoDTO> Photos => Set<PhotoDTO>();
        public DbSet<ReviewDTO> Reviews => Set<ReviewDTO>();
        public DbSet<SalonDTO> Salons => Set<SalonDTO>();
        public DbSet<ServiceDTO> Services => Set<ServiceDTO>();
        public DbSet<UserDTO> Users => Set<UserDTO>();
        public DbSet<VisitDTO> Visits => Set<VisitDTO>();
        public DbSet<WorkerDTO> Workers => Set<WorkerDTO>();

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :
            base(options)
        { }

        public new async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            return await base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(builder);
        }

    //    public DbSet<HairdressesAPI.Models.City>? City { get; set; }
    }
}
