using HairdressesAPI.DTOs;

namespace HairdressesAPI.Models
{
    public class Service
    {
        public int Id { get; init; }
        public string Name { get; init; }
        public float Price { get; init; }
        public DateTime Time { get; init; }
        public VisitDTO Visit { get; init; }
        public SalonDTO Salon { get; init; }
        public WorkerDTO Worker { get; init; }
    }
}
