using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HairdressesAPI.Persistent.Configuration
{
    public class ApplicationUserConfiguraton : IEntityTypeConfiguration<ApplicationUserDTO>
    {
        public void Configure(EntityTypeBuilder<ApplicationUserDTO> builder)
        {
            builder.Property(x => x.UserId)
                .HasMaxLength(30);

            builder.Property(x => x.SalonId)
                .HasMaxLength(30);
        }
    }
}
