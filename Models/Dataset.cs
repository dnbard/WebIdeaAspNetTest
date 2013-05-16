using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.Xml.Linq;

namespace WebIdea_Asp.Net_Test.Models
{
    public class Dataset: List<DataItem>
    {
        private XDocument _xml;

        public Dataset()
        {
            var path = HostingEnvironment.ApplicationPhysicalPath;
            _xml = XDocument.Load(path + "Content/dataset.xml");

            if (_xml == null) return;

            foreach (var xElement in _xml.Root.Elements())
            {
                try
                {
                    var item = new DataItem
                        {
                            Name = xElement.Element("name").Value,
                            Price = xElement.Element("price").Value,
                            ImagePath = xElement.Element("image").Value
                        };
                    Add(item);
                }
                catch (NullReferenceException)
                {
                    //log exception
                }
            }
        }

        public static void Add(string name, string price, string image)
        {
            var path = HostingEnvironment.ApplicationPhysicalPath;
            XDocument xml = XDocument.Load(path + "Content/dataset.xml");

            xml.Root.Add(new XElement("item",
                new XElement("name",name),
                new XElement("price",price),
                new XElement("image",image)));

            xml.Save(path + "Content/dataset.xml");
        }
    }
}