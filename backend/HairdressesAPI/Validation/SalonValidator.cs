using FluentValidation;
using HairdressesAPI.Models;

namespace HairdressesAPI.Validation
{
    public class SalonValidator : AbstractValidator<Salon>
    {
        public SalonValidator()
        {
            RuleFor(salon => salon.Name)
                .NotNull().Length(0, 255);
            RuleFor(salon => salon.PhoneNumber)
                .NotNull().Matches("^\\d{9}$");
        }
    }
}
