using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services.Abstraction;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HairdressesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SalonsController : ControllerBase
    {
        private readonly ILogger<SalonsController> _logger;
        private readonly IApplicationDbContext _context;
        private readonly ISalonService _salonService;

        public SalonsController(IApplicationDbContext context, ISalonService salonService, ILogger<SalonsController> logger)
        {
            _context = context;
            _logger = logger;
            _salonService = salonService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var result = _context.Salons.Include(x => x.Adress);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpGet("{name}")]
        public IActionResult GetByName(string name)
        {
            var result = _context.Salons.FirstOrDefault(x => x.Name == name);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<Salon>> PostSalon(Salon salon, CancellationToken cancellationToken)
        {
            await _salonService.AddAsync(salon, cancellationToken);

            return CreatedAtAction(nameof(GetByName), new { name = salon.Name }, salon);
        }
    }
}