namespace HairdressesAPI.Models
{
    public class UserRegistery
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public int? SalonId { get; init; }
        public int? UserId { get; init; }
    }
}
