using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HairdressesAPI.Persistent.Configuration
{
    public class AdressConfiguration : IEntityTypeConfiguration<AdressDTO>
    {
        public void Configure(EntityTypeBuilder<AdressDTO> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Street)
                .HasMaxLength(30);
            
            builder.Property(x => x.ZipCode)
                .HasMaxLength(30);
        }
    }
}
