using HairdressesAPI.DTOs;

namespace HairdressesAPI.Models
{
    public class User
    {
        public int Id { get; init; }
        public string UserName { get; init; }
        public string Email { get; init; }
        public string PhoneNumber { get; init; }
    }
}
