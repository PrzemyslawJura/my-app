using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HairdressesAPI.Persistent.Configuration
{
    public class WorkerConfiguration : IEntityTypeConfiguration<WorkerDTO>
    {
        public void Configure(EntityTypeBuilder<WorkerDTO> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.FirstName)
                .HasMaxLength(30)
                .HasColumnType("varchar(30)");

            builder.Property(x => x.SecondName)
                .HasMaxLength(30)
                .HasColumnType("varchar(30)");

            builder.Property(x => x.Email)
                .HasMaxLength(100)
                .HasColumnType("varchar(100)");

            builder.Property(x => x.PhoneNumber)
                .HasMaxLength(12)
                .HasColumnType("varchar(12)");
        }
    }
}
