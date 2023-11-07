using HairdressesAPI.DTOs;

namespace HairdressesAPI.Models
{
    public class Review
    {
        public int Id { get; init; }
        public int UserReview { get; init; }
        public string Description { get; init; }
        public SalonDTO Salon { get; init; }
        public UserDTO User { get; init; }
    }
}
