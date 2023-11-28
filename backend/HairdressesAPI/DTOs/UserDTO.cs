namespace HairdressesAPI.DTOs
{
    public class UserDTO
    {
        public int Id { get; init; }
        public string UserName { get; init; }
        public string Email { get; init; }
        public string PhoneNumber { get; init; }
        public int? AddressId { get; init; }
        public AddressDTO? Adress { get; init; }
        public IEnumerable<ReviewDTO>? Reviews { get; init; }
        public IEnumerable<VisitDTO>? Visit { get; init; }
        public  ApplicationUserDTO? ApplicationUser { get; set; }
    }
}
