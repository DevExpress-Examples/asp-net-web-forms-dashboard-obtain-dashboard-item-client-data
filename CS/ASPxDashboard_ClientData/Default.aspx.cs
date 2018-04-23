using System;

namespace ASPxDashboard_ClientData
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ASPxDashboard1.DashboardXmlPath = Server.MapPath("App_Data/dashboard1.xml");
        }
    }
}