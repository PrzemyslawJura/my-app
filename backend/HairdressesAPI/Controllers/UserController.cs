using HairdressesAPI.Models;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services;
using HairdressesAPI.Services.Abstraction;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HairdressesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ILogger<AddressController> _logger;
        private readonly IApplicationDbContext _context;
        private readonly IUserService _userService;


        public UserController(IApplicationDbContext context, IUserService userService, ILogger<AddressController> logger)
        {
            _context = context;
            _logger = logger;
            _userService = userService;
        }

        [HttpPost]
        public async Task<ActionResult<Salon>> Create(User user, CancellationToken cancellationToken)
        {
            await _userService.AddAsync(user, cancellationToken);

            return CreatedAtAction(nameof(GetByName), new { name = user.UserName }, user);
        }

        [HttpGet("{name}")]
        public IActionResult GetByName(string name)
        {
            var result = _context.Users.FirstOrDefault(x => x.UserName == name);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }
    }
}
