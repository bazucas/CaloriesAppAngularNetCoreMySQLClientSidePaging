using System.Threading.Tasks;
using API.Dtos;

namespace Email.Services
{
    public interface IEmailService
    {
        Task SendEmail(ContactDataToSendDto contactData);
    }
}