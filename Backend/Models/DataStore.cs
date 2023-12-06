using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Models
{
    public  static class DataStore
    {
        public static List<Villa> VillaList = new List<Villa>{
                new Villa{
                    Id=1, Name="Pool View"
                },
                new Villa{
                    Id=2, Name="Beach View"
                }
        };
    }
            
}
    
