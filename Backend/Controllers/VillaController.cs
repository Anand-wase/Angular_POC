using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/villa")]
    [ApiController]
    public class VillaController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly ILogger<VillaController> _logger;

        public VillaController(ILogger<VillaController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        [HttpGet]
        public IEnumerable<Villa> GetVillas()
        {
            return _db.Villas;
        }
        [HttpGet("id")]
        public Villa GetVilla(int id)
        {
            return _db.Villas.FirstOrDefault(u=>u.Id==id);  
        }



        
    }
}