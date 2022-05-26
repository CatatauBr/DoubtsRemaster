using DoubtsRemaster.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DoubtsRemaster.Controllers
{
    public class AdmSecreto : Controller
    {
        public IActionResult Index()
        {
            return View("Login");
        }

        public IActionResult Inicial() 
        {
            return View();
        }
    }
}