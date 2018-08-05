using System.Threading.Tasks;
using API.Dtos;
using Email.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IEmailService _emailService;
        public ContactController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> SendEmailAsync([FromBody] ContactDataToSendDto contactData)
        {
            await _emailService.SendEmail(contactData);
            return Ok();
        }
    }
}