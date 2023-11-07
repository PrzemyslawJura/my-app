using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace HairdressesAPI.Persistent
{
    internal class ApplicationDbContext : DbContext
    {
        public DbSet<AdressDTO> Adress => Set<AdressDTO>();
        public DbSet<CityDTO> Cities => Set<CityDTO>();
        public DbSet<PhotoDTO> Photo => Set<PhotoDTO>();
        public DbSet<ReviewDTO> Review => Set<ReviewDTO>();
        public DbSet<SalonDTO> Salon => Set<SalonDTO>();
        public DbSet<ServiceDTO> Service => Set<ServiceDTO>();
        public DbSet<UserDTO> User => Set<UserDTO>();
        public DbSet<VisitDTO> Visit => Set<VisitDTO>();
        public DbSet<WorkerDTO> Worker => Set<WorkerDTO>();

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

            builder.Entity<AdressDTO>()
                .HasOne(e => e.Salon)
                .WithOne(e => e.Adress)
                .HasForeignKey<SalonDTO>(e => e.Id)
                .IsRequired();

            builder.Entity<AdressDTO>()
                .HasOne(e => e.User)
                .WithOne(e => e.Adress)
                .HasForeignKey<UserDTO>(e => e.Id)
                .IsRequired();

            builder.Entity<ServiceDTO>()
                .HasOne(e => e.Visit)
                .WithOne(e => e.Service)
                .HasForeignKey<VisitDTO>(e => e.Id)
                .IsRequired();




            base.OnModelCreating(builder);
        }
    }
}
