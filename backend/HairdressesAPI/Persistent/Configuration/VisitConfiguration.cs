using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HairdressesAPI.Persistent.Configuration
{
    public class VisitConfiguration : IEntityTypeConfiguration<VisitDTO>
    {
        public void Configure(EntityTypeBuilder<VisitDTO> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Date)
                .HasColumnType("datetime2(7)");
        }
    }
}
