using HairdressesAPI.Persistent;
namespace HairdressesAPI.DTOs
{
    public class CityDTO
    {
        public int Id { get; set; }
        public string CityName { get; set; }
        public string Country { get; set; }
        public IEnumerable<AddressDTO>? Adress { get; init; }
    }
}
