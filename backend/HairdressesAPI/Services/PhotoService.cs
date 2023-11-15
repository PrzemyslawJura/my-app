using HairdressesAPI.DTOs;
using HairdressesAPI.Mappings;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services.Abstraction;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace HairdressesAPI.Services
{
    public class PhotoService : IPhotoService
    {
        private readonly IApplicationDbContext _context;

        public PhotoService(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<bool> AddAsync(PhotoInfo photoInfo, CancellationToken cancellationToken)
        {
            if(photoInfo.Photo.Length > 0)
            {
                var currentDirectoryPath = Directory.GetCurrentDirectory();

                var filePath = $"{currentDirectoryPath}/Photos/{photoInfo.SalonId}/photo{photoInfo.Id}.jpg";

                if (!Directory.Exists($"{currentDirectoryPath}/Photos"))
                {
                    Directory.CreateDirectory($"{currentDirectoryPath}/Photos");
                }

                if (!Directory.Exists($"{currentDirectoryPath}/Photos/{photoInfo.SalonId}"))
                {
                    Directory.CreateDirectory($"{currentDirectoryPath}/Photos/{photoInfo.SalonId}");
                }

                using (var stream = File.Create(filePath))
                {
                    await photoInfo.Photo.CopyToAsync(stream);
                }

                var entity = photoInfo.MapPhotoToPhotoDTO();

                entity.PhotoURL = filePath;
                entity.Id = 0;

                _context.Photos.Add(entity);

                await _context.SaveChangesAsync();

                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task UpdateAsync(PhotoInfo photo, CancellationToken cancellationToken)
        {
            var entity = photo.MapPhotoToPhotoDTO();

            _context.Photos.Update(entity);

            await _context.SaveChangesAsync();
        }

        public async Task<bool> DeleteAsync(int id, CancellationToken cancellationToken)
        {
            var photo = await _context.Photos.FindAsync(id, cancellationToken);

            if (photo?.PhotoURL is null || !File.Exists(photo.PhotoURL))
            {
                return false;
            }
            else
            {
                File.Delete(photo.PhotoURL);

                _context.Photos.Remove(photo);

                await _context.SaveChangesAsync(cancellationToken);

                return true;
            }

        }

        public async Task<IEnumerable<PhotoInfo>> GetAllAsync(CancellationToken cancellationToken)
        {
            var result = await _context.Photos.Select(x => x.MapPhotoDTOToPhoto()).ToListAsync();

            return result;
        }

        public async Task<IEnumerable<PhotoInfo>> GetBySalonIdAsync(int salonId, CancellationToken cancellationToken)
        {
            return await _context.Photos.Where(i => i.SalonId == salonId).Select(x => x.MapPhotoDTOToPhoto()).ToListAsync(cancellationToken);
        }

        public async Task<PhotoInfo> GetByIdAsync(int id, CancellationToken cancellationToken)
        {
            var result = await _context.Photos.FindAsync(id, cancellationToken);

            return result.MapPhotoDTOToPhoto();
        }
    }
}
