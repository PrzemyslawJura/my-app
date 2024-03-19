using HairdressesAPI.DTOs;
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
    public class AddressController : ControllerBase
    {
        private readonly ILogger<AddressController> _logger;
        private readonly IApplicationDbContext _context;
        private readonly IAddressService _addressService;
        private readonly ICityService _cityService;

        public AddressController(IApplicationDbContext context,
            IAddressService addressService,
            ICityService cityService,
            ILogger<AddressController> logger)
        {
            _context = context;
            _logger = logger;
            _addressService = addressService;
            _cityService = cityService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Address>>> GetAll(CancellationToken cancellationToken)
        {
            var result = await _addressService.GetAllAsync(cancellationToken);

            return Ok(result);
        }

        [HttpGet("GetByCityId/{cityId}")]
        public async Task<ActionResult<Address>> GetByCityId(int cityId, CancellationToken cancellationToken)
        {
            var result = await _addressService.GetByCityIdAsync(cityId, cancellationToken);

            if (result is null)
            {
                return BadRequest($"Not found Address with cityId: {cityId}");
            }

            return Ok(result);
        }

        [HttpGet("GetById/{id}")]
        public async Task<ActionResult<Address>> GetById(int id, CancellationToken cancellationToken)
        {
            var result = await _addressService.GetByIdAsync(id, cancellationToken);

            if (result is null)
            {
                return BadRequest($"Not found Address with id: {id}");
            }

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<Address>> Create(Address address, CancellationToken cancellationToken)
        {
            var result = await _cityService.GetByNameAsync(address.CityName, cancellationToken);
            if(result is null)
            {
                await _cityService.AddAsync(new City { CityName = address.CityName, Country = "Polska" }, cancellationToken);
                result = await _cityService.GetByNameAsync(address.CityName, cancellationToken);
            }
            address.CityId = result.Id;
            await _addressService.AddAsync(address, cancellationToken);

            return CreatedAtAction(nameof(GetById), new { id = address.Id }, address);
        }

        [HttpPut]
        public async Task<ActionResult<Address>> Update(Address address, CancellationToken cancellationToken)
        {
            var result = await _cityService.GetByNameAsync(address.CityName, cancellationToken);
            if (result is null)
            {
                await _cityService.AddAsync(new City { CityName = address.CityName, Country = "Polska" }, cancellationToken);
                result = await _cityService.GetByNameAsync(address.CityName, cancellationToken);
            }
            address.CityId = result.Id;
            await _addressService.UpdateAsync(address, cancellationToken);

            return CreatedAtAction(nameof(GetById), new { id = address.Id }, address);
        }
    }
}
