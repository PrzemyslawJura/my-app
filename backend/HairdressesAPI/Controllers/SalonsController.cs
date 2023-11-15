using FluentValidation;
using HairdressesAPI.DTOs;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services;
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
        private readonly IPhotoService _photoService;
        private readonly IValidator<Salon> _salonValidator;

        public SalonsController(IApplicationDbContext context, 
            ISalonService salonService, 
            IPhotoService photoService,
            ILogger<SalonsController> logger,
            IValidator<Salon> salonValidator)
        {
            _context = context;
            _logger = logger;
            _salonService = salonService;
            _photoService = photoService;
            _salonValidator = salonValidator;
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
        public async Task<ActionResult<Salon>> Create(Salon salon, CancellationToken cancellationToken)
        {
            var validationResult = await _salonValidator.ValidateAsync(salon);

            if (!validationResult.IsValid)
            {
                return BadRequest();
            }

            await _salonService.AddAsync(salon, cancellationToken);

            return CreatedAtAction(nameof(GetByName), new { name = salon.Name }, salon);
        }

        [HttpPost("photo")]
        public async Task<IActionResult> UploadImage([FromForm] PhotoInfo photoInfo, CancellationToken cancellationToken)
        {
            var isSuccessful = await _photoService.AddAsync(photoInfo, cancellationToken);

            if (isSuccessful)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete("deletePhoto")]
        public async Task<IActionResult> DeleteImage(int id, CancellationToken cancellationToken)
        {
            var isSuccessful = await _photoService.DeleteAsync(id, cancellationToken);

            if (isSuccessful)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}