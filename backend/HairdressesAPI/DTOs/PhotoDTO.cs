namespace HairdressesAPI.DTOs
{
    public class PhotoDTO
    {
        public int Id { get; set; }
        public string PhotoURL { get; set; }
        public bool IsMain { get; init; }
        public int SalonId { get; init; }
        public SalonDTO Salon { get; init; }
    }
}
