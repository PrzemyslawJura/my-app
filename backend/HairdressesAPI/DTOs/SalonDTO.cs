namespace HairdressesAPI.DTOs
{
    public class SalonDTO
    {
        public int Id { get; init; }
        public string Name { get; init; }
        public string Description { get; init; }
        public string Email { get; init; }
        public string PhoneNumber { get; init; }
        public int AddressId { get; init; }
        public AddressDTO Address { get; init; }
        public IEnumerable<PhotoDTO>?  Photos { get; init; }
        public IEnumerable<WorkerDTO>? Workers { get; init; }
        public IEnumerable<ServiceDTO>? Services { get; init; }
        public IEnumerable<ReviewDTO>? Reviews { get; init; }
    }
}
