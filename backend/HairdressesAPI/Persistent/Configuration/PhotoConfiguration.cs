using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HairdressesAPI.Persistent.Configuration
{
    public class PhotoConfiguration : IEntityTypeConfiguration<PhotoDTO>
    {
        public void Configure(EntityTypeBuilder<PhotoDTO> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.PhotoURL)
                .HasColumnType("varchar(250)");

        }
    }
}
