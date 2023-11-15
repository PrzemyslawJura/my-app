using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services;
using HairdressesAPI.Services.Abstraction;
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
        private readonly IApplicationDbContext _context;
        private readonly ICityService _cityService;

        public CityController(IApplicationDbContext context, ICityService cityService, ILogger<CityController> logger)
        {
            _context = context;
            _logger = logger;
            _cityService = cityService; 
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<City>>> GetAll(CancellationToken cancellationToken)
        {
            var result = await _cityService.GetAllAsync(cancellationToken);

            return Ok(result);
        }

        [HttpGet("GetByName/{name}")]
        public async Task<ActionResult<City>> GetByName(string name, CancellationToken cancellationToken)
        {
            var result = await _cityService.GetByNameAsync(name, cancellationToken);

            if (result is null)
            {
                return BadRequest($"Not found City with name: {name}");
            }

            return Ok(result);
        }

        [HttpGet("GetById/{id}")]
        public async Task<ActionResult<City>> GetById(int id, CancellationToken cancellationToken)
        {
            var result = await _cityService.GetByIdAsync(id, cancellationToken);

            if (result is null)
            {
                return BadRequest($"Not found City with id: {id}");
            }

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<City>> Create(City city, CancellationToken cancellationToken)
        {
            await _cityService.AddAsync(city, cancellationToken);

            return CreatedAtAction(nameof(GetByName), new { name = city.CityName }, city);
        }
    }
}
