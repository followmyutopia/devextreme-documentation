Now, add one more chart to display the temperature flow within the month that is currently selected in the grid.


    <!--HTML-->
    <div id="chart2"></div>

<!---->

    <!--JavaScript-->
    $("#chart2").dxChart();


To provide data for this chart, enable selection in the grid and handle the selection change.

    <!--JavaScript-->
    $("#chart2").dxChart({
        dataSource: [],
        series: {
            argumentField: 'day',
            valueField: 't',
            type: 'bar'
        },
        argumentAxis: {
            min: 1,
            max: 31,
            minValueMargin: 0.01,
            maxValueMargin: 0.01
        },
        legend: {
            visible: false
        }
    });
    $("#grid").dxDataGrid({
        dataSource: gridDataSourceConfiguration,
        columns:[
            'month',
            'recordLow',
            'recordHigh'
        ],
        remoteOperations: {
            sorting: false
        },
        onSelectionChanged: function(selectedItems){
            if (selectedItems.selectedRowKeys.length) {
                $("#chart2").dxChart("instance").option("dataSource", selectedItems.selectedRowsData[0].temperature);
            }
        }
    });


The last thing to do is to specify a grid row to be selected initially. For this purpose, use the grid's [selectedRowKeys](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectedRowKeys) option. To specify this option, there should be a key field in the provided data source. So, specify the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) configuration option for the custom store that is used for the widgets.

    <!--JavaScript-->var customStore = new DevExpress.data.CustomStore({
        key: 'month',
        //...
    });
    $("#grid").dxDataGrid({
        dataSource: gridDataSourceConfiguration,
        columns: [
            'month',
            'recordLow',
            'recordHigh'
        ],
        remoteOperations: {
            sorting: false
        },
        selection: {
            mode: 'single'
        },
        selectedRowKeys: ['January'],
        selectionChanged: function (selectedItems) {
            if (selectedItems.selectedRowKeys.length) {
                $("#chart2").dxChart("instance").option("dataSource", selectedItems.selectedRowsData[0].temperature);
            }
        }
    });

Here is the result.

<div class="simulator-desktop-container" data-view="/Content/Applications/16_1/UIWidgets/BindChartToSelectedGridRow/Solution/grid.html, /Content/Applications/16_1/UIWidgets/BindChartToSelectedGridRow/Solution/grid.js"></div>