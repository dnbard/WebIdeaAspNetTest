using System.Web;
using System.Web.Mvc;

namespace WebIdea_Asp.Net_Test
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}