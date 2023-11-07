namespace HairdressesAPI.DTOs
{
    public class UserDTO
    {
        public int Id { get; init; }
        public string FirstName { get; init; }
        public string SecondName { get; init; }
        public string Email { get; init; }
        public string PhoneNumber { get; init; }
        public AdressDTO? Adress { get; init; }
        public IEnumerable<ReviewDTO>? Review { get; init; }
        public IEnumerable<VisitDTO>? Visit { get; init; }
    }
}
