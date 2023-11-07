using HairdressesAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace HairdressesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SalonsController : ControllerBase
    {
        private static readonly List<Salon> Salons = new()
        {
            new Salon { Name = "Szybcy i obciêci", Description = "Lorem ipsum sbkakjasbak"}
        };

        private readonly ILogger<SalonsController> _logger;

        public SalonsController(ILogger<SalonsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Salon> GetAll()
        {
            return Salons;
        }

        [HttpGet("{name}")]
        public IActionResult GetByName(string name)
        {
            var result = Salons.FirstOrDefault(x => x.Name == name);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }
    }
}