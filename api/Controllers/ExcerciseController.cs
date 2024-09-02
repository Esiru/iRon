using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class ExcerciseController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
