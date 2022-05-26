using DoubtsRemaster.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DoubtsRemaster.Controllers
{
    public class Noticias : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult LerNoticia() 
        {
            return View();
        }
    }
}