using HairdressesAPI.Models;

namespace HairdressesAPI.Services.Abstraction
{
    public interface ISalonService
    {
        Task AddAsync(Salon salon, CancellationToken cancellationToken);
    }
}
