<!-- default file list -->
*Files to look at*:

* [Default.aspx](./CS/ASPxDashboard_ClientData/Default.aspx) (VB: [Default.aspx](./VB/ASPxDashboard_ClientData/Default.aspx))
* [Default.aspx.cs](./CS/ASPxDashboard_ClientData/Default.aspx.cs) (VB: [Default.aspx.vb](./VB/ASPxDashboard_ClientData/Default.aspx.vb))
* [ClientData.js](./CS/ASPxDashboard_ClientData/Scripts/ClientData.js) (VB: [ClientData.js](./VB/ASPxDashboard_ClientData/Scripts/ClientData.js))
<!-- default file list end -->
# How to obtain a dashboard item's client data in the ASP.NET Dashboard Control
<!-- run online -->
**[[Run Online]](https://codecentral.devexpress.com/t492284/)**
<!-- run online end -->


<p>The following example demonstrates how to obtain client data corresponding to a particular visual element using <a href="https://documentation.devexpress.com/#Dashboard/clsDevExpressDashboardWebASPxDashboardtopic">ASPxDashboard</a>'s <a href="https://documentation.devexpress.com/#Dashboard/CustomDocument116302">client-side API</a>.</p>
<p>In this example, the <a href="https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_ItemClicktopic">ASPxClientDashboard.ItemClick</a> event is handled to obtain client data and invoke the <a href="https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxPopup/">dxPopup</a> widget with the child <a href="https://js.devexpress.com/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/">dxChart</a>.</p>
<p>In the event handler, the <a href="http://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboardItemClickEventArgs_GetDatatopic">ASPxClientDashboardItemClickEventArgs.GetData</a> method is called to obtain dashboard item's client data. The <a href="http://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboardItemClickEventArgs_GetAxisPointtopic">ASPxClientDashboardItemClickEventArgs.GetAxisPoint</a> method returns the axis point corresponding to the clicked card while the <a href="http://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboardItemData_GetSlicetopic">ASPxClientDashboardItemData.GetSlice</a> method returns the slice of client data by this axis point.<br>To obtain axis points belonging to the "Sparkline" data axis, the <a href="http://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboardItemDataAxis_GetPointstopic">ASPxClientDashboardItemDataAxis.GetPoints</a> method is used. Corresponding actual/target values are obtained using the <a href="http://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboardItemData_GetDeltaValuetopic">ASPxClientDashboardItemData.GetDeltaValue</a> method.<br><br>The dxChart is used to display the detailed chart showing a variation of actual/target values over time.</p>

<br/>


