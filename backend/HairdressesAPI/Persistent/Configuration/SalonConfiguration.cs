using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HairdressesAPI.Persistent.Configuration
{
    public class SalonConfiguration : IEntityTypeConfiguration<SalonDTO>
    {
        public void Configure(EntityTypeBuilder<SalonDTO> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .HasMaxLength(80)
                .HasColumnType("varchar(80)");

            builder.Property(x => x.Description)
                .HasMaxLength(450)
                .HasColumnType("varchar(450)");

            builder.Property(x => x.Email)
                .HasMaxLength(100)
                .HasColumnType("varchar(100)");

            builder.Property(x => x.PhoneNumber)
                .HasMaxLength(12)
                .HasColumnType("varchar(12)");

            builder.HasMany(x => x.Workers)
                .WithOne(x => x.Salon)
                .HasForeignKey(x => x.SalonId)
                .IsRequired();

            builder.HasMany(x => x.Reviews)
                .WithOne(x => x.Salon)
                .HasForeignKey(x => x.SalonId)
                .OnDelete(DeleteBehavior.ClientSetNull);

        }
    }
}
