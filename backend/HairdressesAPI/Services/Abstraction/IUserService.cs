using HairdressesAPI.Models;

namespace HairdressesAPI.Services.Abstraction
{
    public interface IUserService
    {
        Task AddAsync(User user, CancellationToken cancellationToken);
        Task<User> GetByIdAsync(int id, CancellationToken cancellationToken);
        Task<User> GetByNameAsync(string name, CancellationToken cancellationToken);
        Task<User> GetAllAsync(CancellationToken cancellationToken);
    }
}
