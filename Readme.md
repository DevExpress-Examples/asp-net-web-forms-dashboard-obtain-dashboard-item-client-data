<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128580304/16.2.5%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T492284)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
<!-- default file list -->
*Files to look at*:

* [Default.aspx](./CS/ASPxDashboard_ClientData/Default.aspx) (VB: [Default.aspx](./VB/ASPxDashboard_ClientData/Default.aspx))
* [Default.aspx.cs](./CS/ASPxDashboard_ClientData/Default.aspx.cs) (VB: [Default.aspx.vb](./VB/ASPxDashboard_ClientData/Default.aspx.vb))
* [ClientData.js](./CS/ASPxDashboard_ClientData/Scripts/ClientData.js) (VB: [ClientData.js](./VB/ASPxDashboard_ClientData/Scripts/ClientData.js))
<!-- default file list end -->

# Dashboard for Web Forms - How to obtain a dashboard item's client data


The following example uses the ASPxDashboard's [client-side API](https://docs.devexpress.com/Dashboard/116302/web-dashboard/aspnet-web-forms-dashboard-control/client-side-api-overview) to obtain client data that corresponds to a particular visual element.

The [ASPxClientDashboard.ItemClick](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboard?p=netframework#js_aspxclientdashboard_itemclick) event is handled to obtain client data and invoke the [dxPopup](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxPopup/) component with the [dxChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/).

In the event handler, the `e.GetData` method is called to obtain dashboard item's client data. The `e.GetAxisPoint` method returns the axis point corresponding to the clicked card while the [ASPxClientDashboardItemData.GetSlice](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboardItemData#js_aspxclientdashboarditemdata_getslice_tuple_) method returns the slice of client data by this axis point.

The [ASPxClientDashboardItemDataAxis.GetPoints](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboardItemDataAxis#js_aspxclientdashboarditemdataaxis_getpoints) method is used to obtain axis points that belongs to the "Sparkline" data axis. Corresponding actual/target values are obtained using the [ASPxClientDashboardItemData.GetDeltaValue](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboardItemData#js_aspxclientdashboarditemdata_getdeltavalue_deltaid_) method.

When you click a card, the `dxChart` displays the detailed chart and shows a variation of actual/target values over time.

## Documentation

- [ASP.NET Web Forms Dashboard Control - Client-Side API Overview](https://docs.devexpress.com/Dashboard/116302/web-dashboard/aspnet-web-forms-dashboard-control/client-side-api-overview)

## More Examples

- [Dashboard for Web Forms - How to get data from a clicked dashboard item](https://github.com/DevExpress-Examples/Web-Dashboard---How-to-get-data-from-a-clicked-dashboard-item)
- [Dashboard for Web Forms - How to obtain a dashboard item's underlying data for a clicked visual element](https://github.com/DevExpress-Examples/aspxdashboard-how-to-obtain-a-dashboard-items-underlying-data-for-a-clicked-visual-element-t492257)
- [Dashboard for Web Forms - How to obtain underlying data for the specified dashboard item](https://github.com/DevExpress-Examples/aspxdashboard-how-to-obtain-underlying-data-for-the-specified-dashboard-item-t518504)
- [Dashboard for ASP.NET Core - How to obtain a dashboard item's client data](https://github.com/DevExpress-Examples/asp-net-core-dashboard-get-client-data)
- [Dashboard for ASP.NET Core  - How to obtain a dashboard item's underlying data for a clicked visual element](https://github.com/DevExpress-Examples/asp-net-core-dashboard-get-underlying-data-for-clicked-item)
- [Dashboard for ASP.NET Core  - How to obtain underlying data for the specified dashboard item](https://github.com/DevExpress-Examples/asp-net-core-dashboard-display-item-underlying-data)
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=asp-net-web-forms-dashboard-obtain-dashboard-item-client-data&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=asp-net-web-forms-dashboard-obtain-dashboard-item-client-data&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
