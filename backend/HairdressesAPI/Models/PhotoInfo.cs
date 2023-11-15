using HairdressesAPI.DTOs;

namespace HairdressesAPI.Models
{
    public class PhotoInfo
    {
        public int Id { get; init; }
        public IFormFile Photo { get; init; }
        public string PhotoURL { get; init; }
        public bool IsMain { get; init; }
        public int SalonId { get; init; }
    }
}
