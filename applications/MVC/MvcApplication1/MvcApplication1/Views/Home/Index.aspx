<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<!DOCTYPE html>

<!--@jQuery-->
<html>
<!--/@jQuery-->
<!--@Knockout-->
<html>
<!--/@Knockout-->
<!--@AngularJS-->
<html ng-app="myApp">
<!--/@AngularJS-->
<head runat="server">
    <meta name="viewport" content="width=device-width" />
    <title>Index</title>
    <link rel="stylesheet" type="text/css" href="/SharedStatic/DevExtreme/16_2/css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="/SharedStatic/DevExtreme/16_2/css/dx.light.css" />
    <script src="/SharedStatic/DevExtreme/16_2/js/jquery-2.2.3.min.js"></script>
<!--@Knockout-->
    <script src="/SharedStatic/DevExtreme/16_2/js/knockout-3.4.0.js"></script>
<!--/@Knockout-->
<!--@AngularJS-->
    <script src="/SharedStatic/DevExtreme/16_2/js/angular.js"></script>
    <script src="/SharedStatic/DevExtreme/16_2/js/angular-sanitize.js"></script>
<!--/@AngularJS-->
    <script type="text/javascript" src="/SharedStatic/DevExtreme/16_2/js/dx.viz-web.js"></script>
    <script src="/MyJS/script.js"></script>

</head>
<!--@jQuery-->
<body>
    <div id="grid"></div>
    <div id="chart1"></div>
    <div id="chart2"></div>
<!--/@jQuery-->
<!--@Knockout-->
<body>
    <div id="grid" data-bind="dxDataGrid: {
        dataSource: gridDataSource,
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
        onSelectionChanged: selectionChangedHandler,
    }"></div>
                <div id="chart1" data-bind="dxChart: {
        dataSource: chartDataSource,
        seriesTemplate: {
            nameField: 'month',
        },
        commonSeriesSettings: {
            argumentField: 'day',
            valueField: 't',
            type: 'line',
            point: { visible: false }
        },
        argumentAxis: {
            min: 1,
            max: 31,
            minValueMargin: 0,
            maxValueMargin: 0
        },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        }
    }"></div>
                <div id="chart2" data-bind="dxChart: {
        dataSource: chart2DataSource,
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
    }"></div>
<!--/@Knockout-->
<!--@AngularJS-->
<body ng-controller="defaultCtrl">
    <div id="grid" dx-data-grid="{
        dataSource: gridDataSource,
        columns:[
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
        onSelectionChanged: selectionChangedHandler
    }"></div>
    <div id="chart1" dx-chart="{
        dataSource: chartDataSource,
        seriesTemplate: {
            nameField: 'month',
        },
        commonSeriesSettings: {
            argumentField: 'day',
            valueField: 't',
            type: 'line',
            point: { visible: false }
        },
        argumentAxis: {
            min: 1,
            max: 31,
            minValueMargin: 0,
            maxValueMargin: 0
        },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        }
    }"></div>
    <div id="chart2" dx-chart="{
        bindingOptions: {
            'dataSource': 'chart2DataSource'
        },
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
    }"></div>
<!--/@AngularJS-->
</body>
</html>
