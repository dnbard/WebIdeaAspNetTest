using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebIdea_Asp.Net_Test.Models;

namespace WebIdea_Asp.Net_Test.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            var model = new Dataset();
            return View(model);
        }


        public ActionResult Add()
        {
            var name = Request["name"];
            var image = Request["image"];
            var price = Request["price"];

            Dataset.Add(name, image, price);

            var model = new Dataset();
            return View(model);
        }
    }
}
