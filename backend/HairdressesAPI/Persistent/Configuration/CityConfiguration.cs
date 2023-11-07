using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HairdressesAPI.Persistent.Configuration
{
    public class CityConfiguration : IEntityTypeConfiguration<CityDTO>
    {
        public void Configure(EntityTypeBuilder<CityDTO> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.CityName)
                .HasMaxLength(30)
                .HasColumnType("varchar(30)");

            builder.Property(x => x.Country)
                .HasMaxLength(30)
                .HasColumnType("varchar(30)");
        }
    }
}
