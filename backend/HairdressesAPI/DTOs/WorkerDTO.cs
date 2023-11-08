namespace HairdressesAPI.DTOs
{
    public class WorkerDTO
    {
        public int Id { get; init; }
        public string FirstName { get; init; }
        public string SecondName { get; init; }
        public string Email { get; init; }
        public string PhoneNumber { get; init; }
        public int SalonId { get; init; }
        public IEnumerable<ServiceDTO>? Service { get; init; }
        public SalonDTO Salon { get; init; }
    }
}
