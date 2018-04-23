function getClientData(args) {
    if (args.ItemName == "cardDashboardItem1") {
        var clientData = [],
            clientDataTable = [],
            clickedItemData,
            delta;
        var sparklineAxis = DashboardDataAxisNames.SparklineAxis,
            defaultAxis = DashboardDataAxisNames.Default;

        clientData = args.GetData();
        clickedPoint = args.GetAxisPoint(defaultAxis);
        clickedItemData = clientData.GetSlice(clickedPoint);
        delta = args.GetDeltas()[0];

        for (var i = 0; i < clickedItemData.GetAxis(sparklineAxis).GetPoints().length; i++) {
            var dataTableRow = {},
            axisPoint = clickedItemData.GetSlice(clickedItemData.GetAxis(sparklineAxis).GetPoints()[i]);

            dataTableRow["Argument"] = clickedItemData.GetAxis(sparklineAxis).GetPoints()[i].GetValue();
            if (axisPoint.GetDeltaValue(delta.Id).GetActualValue().GetValue() != null &&
                axisPoint.GetDeltaValue(delta.Id).GetTargetValue().GetValue() != null) {
                dataTableRow["Actual"] = axisPoint.GetDeltaValue(delta.Id).GetActualValue().GetValue();
                dataTableRow["Target"] = axisPoint.GetDeltaValue(delta.Id).GetTargetValue().GetValue();
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
        popup.option('title', clickedPoint.GetValue() + " - Details");
        $popupContent = popup.content();
        $popupContent.empty();
        $popupContent.append($chart);
        popup.show();
    };
}

function initPopup() {
    $("#myPopup").dxPopup({
        width: 800, height: 600,
        title: "Details",
        showCloseButton: true
    });
}