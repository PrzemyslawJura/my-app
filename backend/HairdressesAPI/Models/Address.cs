using HairdressesAPI.DTOs;

namespace HairdressesAPI.Models
{
    public class Address
    {
        public int Id { get; set; }
        public string Street { get; set; }
        public string LocalNumber { get; set; }
        public string ZipCode { get; set; }
        public string CityName { get; set; }
        public int CityId { get; set; }
    }
}
