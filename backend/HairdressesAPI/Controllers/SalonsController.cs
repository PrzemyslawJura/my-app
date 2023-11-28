using FluentValidation;
using HairdressesAPI.DTOs;
using HairdressesAPI.Mappings;
using HairdressesAPI.Models;
using HairdressesAPI.Persistent;
using HairdressesAPI.Persistent.Abstraction;
using HairdressesAPI.Services;
using HairdressesAPI.Services.Abstraction;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace HairdressesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SalonsController : ControllerBase
    {
        private readonly ILogger<SalonsController> _logger;
        private readonly IApplicationDbContext _context;
        private readonly ISalonService _salonService;
        private readonly ICityService _cityService;
        private readonly IAddressService _addressService;
        private readonly IPhotoService _photoService;
        private readonly IWorkerService _workerService;
        private readonly IServiceService _serviceService;
        private readonly IVisitService _visitService;
        private readonly IValidator<Salon> _salonValidator;
        private readonly UserManager<ApplicationUserDTO> _userManager;

        public SalonsController(IApplicationDbContext context, 
            ISalonService salonService,
            IAddressService addressService,
            ICityService cityService,
            IPhotoService photoService,
            ILogger<SalonsController> logger,
            IValidator<Salon> salonValidator,
            IWorkerService workerService,
            IServiceService serviceService,
            UserManager<ApplicationUserDTO> userManager,
            IVisitService visitService)
        {
            _context = context;
            _logger = logger;
            _salonService = salonService;
            _cityService = cityService;
            _photoService = photoService;
            _salonValidator = salonValidator;
            _addressService = addressService;
            _workerService = workerService;
            _serviceService = serviceService;
            _userManager = userManager;
            _visitService = visitService;
        }

        [HttpGet]
        //[Authorize]
        public IActionResult GetAll()
        {
            var result = _context.Salons
                .Include(x => x.Workers)
                .Include(x => x.Photos)
                .Include(x => x.Address)
                    .ThenInclude(x => x.City);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpGet("{name}")]
        public IActionResult GetByName(string name, CancellationToken cancellationToken)
        {
            var result = _salonService.GetByNameAsync(name, cancellationToken);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<Salon>> Create([FromForm] RegisterSalon salon, CancellationToken cancellationToken)
        {
            //var validationResult = await _salonValidator.ValidateAsync(salon);

            //if (!validationResult.IsValid)
            //{
            //    return BadRequest();
            //}

            var result = await _cityService.GetByNameAsync(salon.Address.CityName, cancellationToken);
            if (result is null)
            {
                await _cityService.AddAsync(new City { CityName = salon.Address.CityName, Country = "Polska" }, cancellationToken);
                result = await _cityService.GetByNameAsync(salon.Address.CityName, cancellationToken);
            }
            salon.Address.CityId = result.Id;

            await _salonService.AddAsync(salon.MapRegisterSalonToSalon(), cancellationToken);

            salon.Photo.IsMain = true;
            
            salon.Photo.SalonId = _context.Salons.FirstOrDefault(x => x.Name == salon.Name).Id;

            await _photoService.AddAsync(salon.Photo, cancellationToken);

            var user = new ApplicationUserDTO
            {
                UserName = salon.Email,
                Email = salon.Email,
                SalonId = _context.Salons.FirstOrDefault(x => x.Name == salon.Name).Id
        };

            await _userManager.CreateAsync(user, salon.Password);

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

        [HttpPost("AddWorker")]
        public async Task<ActionResult<Worker>> AddWorker([FromForm] Worker worker, CancellationToken cancellationToken)
        {
            worker.Photo.IsMain = false;

            worker.Photo.SalonId = worker.SalonId;

            //worker.SalonId = 1;

            worker.Photo.SalonId = worker.SalonId;

            await _workerService.AddAsync(worker, cancellationToken);

            var result = _workerService.GetAllAsync(cancellationToken).Result.Select(x => x.Id).Last();

            worker.Photo.WorkerId = result;

            worker.Photo.Id = result;

            await _photoService.AddAsync(worker.Photo, cancellationToken);

            return CreatedAtAction(nameof(GetByName), new { name = worker.SecondName }, worker);
        }

        [HttpGet("WorkersWithSalonId/{salonId}")]
        public async Task<ActionResult<IEnumerable<Worker>>> WorkersWithSalonId(int salonId, CancellationToken cancellationToken)
        {
            var result = await _workerService.GetAllBySalonIdAsync(salonId, cancellationToken);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPost("AddService")]
        [Authorize]
        public async Task<ActionResult<Service>> CreateService(Service service, CancellationToken cancellationToken)
        {
            await _serviceService.AddAsync(service, cancellationToken);

            return CreatedAtAction(nameof(GetByName), new { name = service.Name }, service);
        }

        [HttpGet("ServicesWithWorkerId/{workerId}")]
        public async Task<ActionResult<IEnumerable<Worker>>> ServiceWithWorkerId(int workerId, CancellationToken cancellationToken)
        {
            var result = await _serviceService.GetByWorkerIdAsync(workerId, cancellationToken);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpGet("GetSalonById/{id}")]
        [Authorize]
        public async Task<ActionResult<Salon>> GetSalonById(int id, CancellationToken cancellationToken)
        {
            var result = await _salonService.GetByIdAsync(id, cancellationToken);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpGet("ServicesWithSalonId/{workerId}")]
        public async Task<ActionResult<IEnumerable<Service>>> ServiceWithSalonId(int salonId, CancellationToken cancellationToken)
        {
            var result = await _serviceService.GetBySalonIdAsync(salonId, cancellationToken);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }
        [HttpPost("AddVisit")]
        public async Task<ActionResult<Service>> CreateVisit(Visit visit, CancellationToken cancellationToken)
        {
            await _visitService.AddAsync(visit, cancellationToken);

            return CreatedAtAction(nameof(GetByName), new { name = visit.Name }, visit);
        }

        [HttpGet("GetAllSalonVisits/{salonId}")]
        public async Task<ActionResult<IEnumerable<VisitInfo>>> GetAllSalonVisits(int salonId, CancellationToken cancellationToken)
        {
            var result = await _visitService.GetBySalonIdAsync(salonId, cancellationToken);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }
    }
}