using HairdressesAPI.DTOs;

namespace HairdressesAPI.Models
{
    public class Service
    {
        public int Id { get; init; }
        public string Name { get; init; }
        public float Price { get; init; }
        public int Time { get; init; }
        public int WorkerId { get; init; }
        public string? WorkerFirstName { get; init; }
        public string? WorkerSecondName { get; init; }
    }
}
