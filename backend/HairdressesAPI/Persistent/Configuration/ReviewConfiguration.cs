using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HairdressesAPI.Persistent.Configuration
{
    public class ReviewConfiguration : IEntityTypeConfiguration<ReviewDTO>
    {
        public void Configure(EntityTypeBuilder<ReviewDTO> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.UserReview)
                .HasMaxLength(1)
                .HasColumnType("decimal(5, 2)");

            builder.Property(x => x.Description)
                .HasMaxLength(250)
                .HasColumnType("varchar(250)");
        }
    }
}
