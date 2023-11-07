namespace HairdressesAPI.DTOs
{
    public class PhotoDTO
    {
        public int Id { get; init; }
        public string PhotoURL { get; init; }
        public bool IsMain { get; init; }
        public SalonDTO Salon { get; init; }
    }
}
