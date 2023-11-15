using HairdressesAPI.Models;

namespace HairdressesAPI.Services.Abstraction
{
    public interface IPhotoService
    {
        Task<bool> AddAsync(PhotoInfo photoInfo, CancellationToken cancellationToken);
        Task<PhotoInfo> GetByIdAsync(int id, CancellationToken cancellationToken);
        Task<IEnumerable<PhotoInfo>> GetBySalonIdAsync(int salonId, CancellationToken cancellationToken);
        Task<IEnumerable<PhotoInfo>> GetAllAsync(CancellationToken cancellationToken);
        Task UpdateAsync(PhotoInfo photo, CancellationToken cancellationToken);
        Task<bool> DeleteAsync(int id, CancellationToken cancellationToken);
    }
}
