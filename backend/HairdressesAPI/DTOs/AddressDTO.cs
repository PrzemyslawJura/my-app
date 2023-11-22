namespace HairdressesAPI.DTOs
{
    public class AddressDTO
    {
        public int Id { get; set; }
        public string Street { get; set; }
        public string LocalNumber { get; set; }
        public string ZipCode { get; set; }
        public int CityId { get; set; }
        public CityDTO City { get; init; }
        public UserDTO? User { get; set; }
        public SalonDTO Salon { get; set; }
    }
}
