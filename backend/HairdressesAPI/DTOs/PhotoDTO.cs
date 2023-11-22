namespace HairdressesAPI.DTOs
{
    public class PhotoDTO
    {
        public int Id { get; set; }
        public string PhotoURL { get; set; }
        public bool IsMain { get; set; }
        public int SalonId { get; set; }
        public int? WorkerId { get; set; }
        public WorkerDTO? Worker { get; set; }
        public SalonDTO Salon { get; set; }
    }
}
