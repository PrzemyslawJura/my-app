using Microsoft.AspNetCore.Identity;

namespace HairdressesAPI.DTOs
{
    public class ApplicationUserDTO : IdentityUser
    {
        public int? UserId { get; set; }
        public int? SalonId { get; set; }
        public SalonDTO? Salon { get; set; }
        public UserDTO? User { get; set; }
    }
}
