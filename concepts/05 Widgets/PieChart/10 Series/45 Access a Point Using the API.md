Before accessing a series point, gain access to its series by calling the [getAllSeries()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getAllSeries) method. You can call the [getSeriesByName(seriesName)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getSeriesByNameseriesName)  or [getSeriesByPos(seriesIndex)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getSeriesByPosseriesIndex) method as an alternative for multi-series **PieCharts**.

---
##### jQuery

    <!--JavaScript-->var series = $("#pieChartContainer").dxPieChart("getAllSeries")[0];

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxPieChartModule, DxPieChartComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        series: any = [];
        getSeries() {
            this.series = this.pieChart.instance.getAllSeries()[0];
        }
    }

---

Use the following methods to access series points. All of them return one or several objects whose fields and methods are described in the API reference's [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/) section.

- [getAllPoints()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/Methods/#getAllPoints)        
Gets all the series points.

    ---
    ##### jQuery

        <!--JavaScript-->var series = $("#pieChartContainer").dxPieChart("getAllSeries")[0];
        var seriesPoints = series.getAllPoints();

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from '@angular/core';
        import { DxPieChartModule, DxPieChartComponent } from 'devextreme-angular';
        // ...
        export class AppComponent {
            @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
            seriesPoints: any = [];
            getSeriesPoints() {
                let series = this.pieChart.instance.getAllSeries()[0];
                this.seriesPoints = series.getAllPoints();
            }
        }

    ---

- [getPointsByArg(pointArg)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/Methods/#getPointsByArgpointArg)      
Gets those series points that have a specific argument.

    ---
    ##### jQuery

        <!--JavaScript-->var chinaPoints = series.getPointsByArg("China");

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from '@angular/core';
        import { DxPieChartModule, DxPieChartComponent } from 'devextreme-angular';
        // ...
        export class AppComponent {
            @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
            chinaPoints: any = {};
            getChinaPoints() {
                let series = this.pieChart.instance.getAllSeries()[0];
                this.chinaPoints = series.getPointsByArg("China");
            }
        }

    ---

- [getPointByPos(positionIndex)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/Methods/#getPointByPospositionIndex)          
Gets a point using its index. The index is zero-based.

    ---
    ##### jQuery

        <!--JavaScript-->var firstPoint = series.getPointByPos(0);
    
    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from '@angular/core';
        import { DxPieChartModule, DxPieChartComponent } from 'devextreme-angular';
        // ...
        export class AppComponent {
            @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
            firstPoint: any = {};
            getFirstPoint() {
                let series = this.pieChart.instance.getAllSeries()[0];
                this.firstPoint = series.getPointByPos(0);
            }
        }

    ---

- [getVisiblePoints()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/Methods/#getVisiblePoints)          
Gets only [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#isVisible) series points.

    ---
    ##### jQuery

        <!--JavaScript-->var visiblePoints = series.getVisiblePoints();

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from '@angular/core';
        import { DxPieChartModule, DxPieChartComponent } from 'devextreme-angular';
        // ...
        export class AppComponent {
            @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
            visiblePoints: any = [];
            getVisiblePoints() {
                let series = this.pieChart.instance.getAllSeries()[0];
                this.visiblePoints = series.getVisiblePoints();
            }
        }

    ---

Apart from the API methods, you can access a series point in the event handlers. For example, the [onPointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onPointClick) event handler gets the clicked series point in the argument.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            onPointClick: function (e) {
                var point = e.target;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        (onPointClick)="onPointClick($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    export class AppComponent {
        onPointClick (e) {
            let point = e.target;
            // ...
        };
    }

---

[note] Each [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/) object contains a reference to its parent series in the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Fields/#series) field.

#####See Also#####
- [Access a Point Label Using the API](/Documentation/Guide/Widgets/PieChart/Point_Labels/Access_a_Label_Using_the_API/)
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
