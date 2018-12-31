using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using iphoneAPI.Models;

namespace iphoneAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private static int count = 01;
        private static List<Products> allproduct = new List<Products>();

        [HttpPost]
        public void Post([FromBody] Products value)
        {
            var newproduct = new Products
            {
                Id = ($"Order{count++}"),
                Name = "iphone",
                Price = value.Price,
                Amount = value.Amount,
                Total = value.Price * value.Amount,
                Group = CalculateGroup(value.Price * value.Amount)
            };
            allproduct.Add(newproduct);
        }


        private string CalculateGroup(int total)
        {
            if (total > 20001)
            {
                return "A";
            }
            else if (total >= 15001 && total <= 20000)
            {
                return "B";
            }

            return "C";
        }



        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Products>> Get()
        {
            return allproduct;
        }





    }
}
