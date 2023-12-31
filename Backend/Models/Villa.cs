using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Villa
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Rate { get; set; }

        public int Sqft { get; set; }
        public int Occupancy { get; set; }
        public string? Image { get; set; }
        public string Details { get; set; }
        
    }
}