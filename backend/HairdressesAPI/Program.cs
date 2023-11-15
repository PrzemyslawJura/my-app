using HairdressesAPI.Persistent;
using Microsoft.EntityFrameworkCore;
using HairdressesAPI.Controllers;
using HairdressesAPI.Models;
using System.Text.Json.Serialization;
using HairdressesAPI.Services;
using HairdressesAPI.Services.Abstraction;
using HairdressesAPI.Persistent.Abstraction;
using Microsoft.EntityFrameworkCore.Internal;
using HairdressesAPI.Extensions.SwaggerFilters;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using HairdressesAPI.Validation;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
     .AddJsonOptions(options =>
     {
         options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
     });




// Add services to the container.
builder.Services.AddDbContext<ApplicationDbContext>(option =>
    option.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add interfaces
builder.Services.AddScoped<IApplicationDbContext, ApplicationDbContext>();
builder.Services.AddScoped<ICityService, CityService>();
builder.Services.AddScoped<IAddressService, AddressService>();
builder.Services.AddScoped<ISalonService, SalonService>();
builder.Services.AddScoped<IPhotoService, PhotoService>();

builder.Services.AddScoped<IValidator<Salon>, SalonValidator>();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(x => x.OperationFilter<FileUploadFilter>()); ;

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
