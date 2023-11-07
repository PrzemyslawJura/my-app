namespace HairdressesAPI.DTOs
{
    public class CityDTO
    {
        public int Id { get; set; }
        public string CityName { get; set; }
        public string Country { get; set; }
        public IEnumerable<AdressDTO>? Adress { get; init; }
    }
}
