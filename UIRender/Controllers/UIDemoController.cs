using Microsoft.AspNetCore.Mvc;

namespace UIRender.Controllers;

public class UIDemoController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}