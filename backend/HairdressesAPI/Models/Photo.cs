using HairdressesAPI.DTOs;

namespace HairdressesAPI.Models
{
    public class Photo
    {
        public int Id { get; init; }
        public string PhotoURL { get; init; }
        public bool IsMain { get; init; }
        public SalonDTO Salon { get; init; }
    }
}
