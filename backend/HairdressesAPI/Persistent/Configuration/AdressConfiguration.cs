using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HairdressesAPI.Persistent.Configuration
{
    public class AdressConfiguration : IEntityTypeConfiguration<AddressDTO>
    {
        public void Configure(EntityTypeBuilder<AddressDTO> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Street)
                .HasMaxLength(30);
            
            builder.Property(x => x.ZipCode)
                .HasMaxLength(30);

            builder.HasOne(x => x.Salon)
                .WithOne(x => x.Adress)
                .HasForeignKey<SalonDTO>(x => x.AddressId)
                .IsRequired();

            builder.HasOne(x => x.User)
                .WithOne(x => x.Adress)
                .HasForeignKey<UserDTO>(x => x.AddressId);

            builder.HasOne(x => x.City)
                .WithMany(x => x.Adress)
                .HasForeignKey(x => x.CityId)
                .IsRequired();
        }
    }
}




