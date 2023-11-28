using HairdressesAPI.DTOs;

namespace HairdressesAPI.Models
{
    public class Visit
    {
        public int Id { get; init; }
        public DateTime Date { get; init; }
        public bool IsActive { get; init; }
        public bool Notification { get; init; }
        public int ServiceId { get; init; }
        public int UserId { get; init; }
        public int SalonId { get; init; }
        public string Name { get; init; }
    }
}
