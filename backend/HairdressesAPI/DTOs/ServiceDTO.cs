namespace HairdressesAPI.DTOs
{
    public class ServiceDTO
    {
        public int Id { get; init; }
        public string Name { get; init; }
        public float Price { get; init; }
        public int Time { get; init; }
        public int WorkerId { get; init; }
        public VisitDTO Visit { get; init; }
        public WorkerDTO Worker { get; init; }
    }
}
