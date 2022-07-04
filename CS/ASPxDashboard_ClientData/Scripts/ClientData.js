function onBeforeRender(sender) {
    var dashboardControl = sender.GetDashboardControl();

    var viewerApiExtension = dashboardControl.findExtension('viewerApi');
    if (viewerApiExtension)
        viewerApiExtension.on('itemClick', onItemClick);
}

function onItemClick(args) {
    if (args.itemName == "cardDashboardItem1") {
        var clientData = [],
            clientDataTable = [],
            clickedItemData,
            delta;
        var sparklineAxis = "Sparkline",
            defaultAxis = "Default";

        clientData = args.getData();
        clickedPoint = args.getAxisPoint(defaultAxis);
        clickedItemData = clientData.getSlice(clickedPoint);
        delta = args.getDeltas()[0];
       
        for (var i = 0; i < clickedItemData.getAxis(sparklineAxis).getPoints().length; i++) {
            var dataTableRow = {},
            axisPoint = clickedItemData.getSlice(clickedItemData.getAxis(sparklineAxis).getPoints()[i]);

            dataTableRow["Argument"] = clickedItemData.getAxis(sparklineAxis).getPoints()[i].getValue();
            if (axisPoint.getDeltaValue(delta.id).getActualValue().getValue() != null &&
                axisPoint.getDeltaValue(delta.id).getTargetValue().getValue() != null) {
                dataTableRow["Actual"] = axisPoint.getDeltaValue(delta.id).getActualValue().getValue();
                dataTableRow["Target"] = axisPoint.getDeltaValue(delta.id).getTargetValue().getValue();
            }
            else {
                dataTableRow["Actual"] = 0;
                dataTableRow["Target"] = 0;
            }
            clientDataTable.push(dataTableRow);
        }

        var $chart = $('<div/>');
        $chart.dxChart({
            height: 500,
            dataSource: clientDataTable,
            series: [{
                valueField: 'Actual', name: 'Actual'
            }, {
                valueField: 'Target', name: 'Target'
            }
            ],
            commonSeriesSettings: {
                type: 'splineArea',
                argumentField: 'Argument',
                ignoreEmptyPoints: true
            },
            argumentAxis: {
                showZero: false,
                type: 'discrete'
            },
            valueAxis: {
                showZero: false,
                type: 'continuous',
                label: { format: 'currency' }
            }
        });

        var popup = $("#myPopup").data("dxPopup");
        popup.option('title', clickedPoint.getValue() + " - Details");
        $popupContent = popup.content();
        $popupContent.empty();
        $popupContent.append($chart);
        popup.show();
    };
}

function initPopup(sender) {
    $("#myPopup").dxPopup({
        width: 800, height: 600,
        title: "Details",
        showCloseButton: true
    });
}
