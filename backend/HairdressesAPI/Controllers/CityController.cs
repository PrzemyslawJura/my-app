using HairdressesAPI.Models;
using HairdressesAPI.Persistent;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HairdressesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ILogger<CityController> _logger;
        private readonly ApplicationDbContext _context;

        public CityController(ApplicationDbContext context, ILogger<CityController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var result =  _context.Cities.Include(x => x.Adress);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }
    }
}
