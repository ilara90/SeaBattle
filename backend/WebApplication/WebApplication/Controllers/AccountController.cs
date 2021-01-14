using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController
    {
        [HttpGet]
        [Route("")]
        public string Get()
        {
            return "Battle Ship";
        }
    }
}