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

        public IActionResult CriarPostagem() 
        {
            return View();
        }

        public IActionResult ListarPostagem() 
        {
            return View();
        }

        public IActionResult AdicionarColaborador() 
        {
            return View();
        }

        public IActionResult ListarColaborador() 
        {
            return View();
        }

        public IActionResult GerenciarUsuarios() 
        {
            return View();
        }

        public IActionResult GerenciarTemas() 
        {
            return View();
        }

        public IActionResult GerenciarTopicos() 
        {
            return View();
        }

        public IActionResult ModerarDenuncia() 
        {
            return View();
        }
    }
}