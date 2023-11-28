using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using HairdressesAPI.Mappings;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services;
using HairdressesAPI.Services.Abstraction;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
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
        private readonly UserManager<ApplicationUserDTO> _userManager;


        public UserController(IApplicationDbContext context, IUserService userService, ILogger<AddressController> logger, UserManager<ApplicationUserDTO> userManager)
        {
            _context = context;
            _logger = logger;
            _userService = userService;
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<ActionResult<Salon>> Create(RegisterUser user, CancellationToken cancellationToken)
        {
            await _userService.AddAsync(user.MapUserToRegisterUser(), cancellationToken);


            var newUser = new ApplicationUserDTO
            {
                UserName = user.Email,
                Email = user.Email,
                UserId = _context.Users.FirstOrDefault(x => x.Email == user.Email).Id
            };

            await _userManager.CreateAsync(newUser, user.Password);

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
