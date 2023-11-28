using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace HairdressesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdentityController : ControllerBase
    {
        private readonly UserManager<ApplicationUserDTO> _userManager;

        public IdentityController(UserManager<ApplicationUserDTO> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegistery model)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUserDTO { };
                if (model.UserId == null)
                {
                    user = new ApplicationUserDTO
                    {
                        UserName = model.UserName,
                        Email = model.Email,
                        SalonId = model.SalonId
                    };
                }
                else
                {
                    user = new ApplicationUserDTO
                    {
                        UserName = model.UserName,
                        Email = model.Email,
                        UserId = model.UserId
                    };
                }

                var result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    return Ok("Rejestracja udana");
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }

            return BadRequest("Nieprawidłowe dane wejściowe");
        }
        [HttpGet("GetByEmailId")]
        public async Task<ActionResult> GetByEmailId(string email, CancellationToken cancellationToken)
        {
            var result = await _userManager.FindByEmailAsync(email);

            var mainResult = new UserInfo
            {
                SalonId = result.SalonId,
                UserId = result.UserId
            };

            return Ok(mainResult);
        }
    }
}
