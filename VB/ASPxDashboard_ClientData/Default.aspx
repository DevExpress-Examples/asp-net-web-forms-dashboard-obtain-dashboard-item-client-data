<%@ Page Language="VB" AutoEventWireup="true" CodeBehind="Default.aspx.vb" Inherits="ASPxDashboard_ClientData.Default" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title></title>
    <script src="Scripts/ClientData.js"></script>
    <style type="text/css">
        html, body, form {  
            height: 100%;  
            margin: 0;  
            padding: 0;  
            overflow: hidden;  
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div id="myPopup"></div>
        <dx:ASPxDashboard ID="ASPxDashboard1" runat="server" 
            WorkingMode="Viewer" Width="100%" Height="100%" DashboardStorageFolder = "~/App_Data/Dashboards">
            <ClientSideEvents BeforeRender="onBeforeRender" Init="initPopup" />
        </dx:ASPxDashboard>
    </form>
</body>
</html>
