<!-- default file list -->
*Files to look at*:

* [Default.aspx](./CS/ASPxDashboard_ClientData/Default.aspx) (VB: [Default.aspx](./VB/ASPxDashboard_ClientData/Default.aspx))
* [Default.aspx.cs](./CS/ASPxDashboard_ClientData/Default.aspx.cs) (VB: [Default.aspx.vb](./VB/ASPxDashboard_ClientData/Default.aspx.vb))
* [ClientData.js](./CS/ASPxDashboard_ClientData/Scripts/ClientData.js) (VB: [ClientData.js](./VB/ASPxDashboard_ClientData/Scripts/ClientData.js))
<!-- default file list end -->
# ASP.NET Web Forms Dashboard Control - How to obtain a dashboard item's client data
<!-- run online -->
**[[Run Online]](https://codecentral.devexpress.com/t492284/)**
<!-- run online end -->


The following example uses the ASPxDashboard's [client-side API](https://docs.devexpress.com/Dashboard/116302/web-dashboard/aspnet-web-forms-dashboard-control/client-side-api-overview) to obtain client data that corresponds to a particular visual element.

The [ASPxClientDashboard.ItemClick](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboard?p=netframework#js_aspxclientdashboard_itemclick) event is handled to obtain client data and invoke the [dxPopup](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxPopup/) component with the [dxChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/).

In the event handler, the `e.GetData` method is called to obtain dashboard item's client data. The `e.GetAxisPoint` method returns the axis point corresponding to the clicked card while the [ASPxClientDashboardItemData.GetSlice](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboardItemData#js_aspxclientdashboarditemdata_getslice_tuple_) method returns the slice of client data by this axis point.

The [ASPxClientDashboardItemDataAxis.GetPoints](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboardItemDataAxis#js_aspxclientdashboarditemdataaxis_getpoints) method is used to obtain axis points that belongs to the "Sparkline" data axis. Corresponding actual/target values are obtained using the [ASPxClientDashboardItemData.GetDeltaValue](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboardItemData#js_aspxclientdashboarditemdata_getdeltavalue_deltaid_) method.

The `dxChart` displays the detailed chart and shows a variation of actual/target values over time.

## Documentation

- [ASP.NET Web Forms Dashboard Control - Client-Side API Overview](https://docs.devexpress.com/Dashboard/116302/web-dashboard/aspnet-web-forms-dashboard-control/client-side-api-overview)

## More Examples

- [ASP.NET Web Forms Dashboard Control - How to obtain a dashboard item's underlying data for a clicked visual element](https://github.com/DevExpress-Examples/aspxdashboard-how-to-obtain-a-dashboard-items-underlying-data-for-a-clicked-visual-element-t492257)
- [ASPxDashboard - How to obtain underlying data for the specified dashboard item](https://github.com/DevExpress-Examples/aspxdashboard-how-to-obtain-underlying-data-for-the-specified-dashboard-item-t518504)


