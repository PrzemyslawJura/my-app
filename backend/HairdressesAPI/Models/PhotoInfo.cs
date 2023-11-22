using HairdressesAPI.DTOs;

namespace HairdressesAPI.Models
{
    public class PhotoInfo
    {
        public int Id { get; set; }
        public IFormFile Photo { get; init; }
        public string? PhotoURL { get; set; }
        public bool IsMain { get; set; }
        public int SalonId { get; set; }
        public int? WorkerId { get; set; }
    }
}
