namespace HairdressesAPI.DTOs
{
    public class VisitDTO
    {
        public int Id { get; init; }
        public DateTime Date { get; init; }
        public bool IsActive { get; init; }
        public bool Notification { get; init; }
        public UserDTO User { get; init; }
        public ServiceDTO Service { get; init; }
    }
}
