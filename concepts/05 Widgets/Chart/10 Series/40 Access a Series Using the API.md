The **Chart** exposes the following methods for accessing a series. All of them return one or several objects whose fields and methods are described in the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/) section of the API reference.

- [getAllSeries()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getAllSeries)        
Gets all series of the **Chart**.

    ---
    ##### jQuery

        <!--JavaScript-->var seriesCollection = $("#chartContainer").dxChart("getAllSeries");

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from '@angular/core';
        import { DxChartModule, DxChartComponent } from 'devextreme-angular';
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent) chart: DxChartComponent;
            seriesCollection: any = [];
            getAllSeries() {
                this.seriesCollection = this.chart.instance.getAllSeries();
            }
        }

    ---

- [getSeriesByName(seriesName)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getSeriesByNameseriesName)       
Gets a series by its [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name).

    ---
    ##### jQuery

        <!--JavaScript-->var series = $("#chartContainer").dxChart("getSeriesByName", "Series 1");

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from '@angular/core';
        import { DxChartModule, DxChartComponent } from 'devextreme-angular';
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent) chart: DxChartComponent;
            series: any = {};
            getSeries() {
                this.series = this.chart.instance.getSeriesByName("Series 1");
            }
        }

    ---

- [getSeriesByPos(seriesIndex)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getSeriesByPosseriesIndex)       
Gets a series by its index in the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) array. The index is zero-based.

    ---
    ##### jQuery

        <!--JavaScript-->var series = $("#chartContainer").dxChart("getSeriesByPos", 0);

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from '@angular/core';
        import { DxChartModule, DxChartComponent } from 'devextreme-angular';
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent) chart: DxChartComponent;
            series: any = {};
            getSeries() {
                this.series = this.chart.instance.getSeriesByPos(0);
            }
        }

    ---

Apart from the API methods, you can access a series in the event handlers. For example, the [onSeriesClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesClick) event handler gets the clicked series in the argument.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onSeriesClick: function (e) {
                var series = e.target;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onSeriesClick)="onSeriesClick($event)">
    </dx-chart>

    <!--TypeScript-->
    export class AppComponent {
        onSeriesClick (e) {
            let series = e.target;
            // ...
        };
    }

---

Once you get the series, you can access its child points. For further information, refer to the [Access a Series Point Using the API](/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/) topic.

#####See Also#####
- [Show and Hide a Series](/Documentation/Guide/Widgets/Chart/Series/Show_and_Hide_a_Series/)
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)

[tags]chart, series, get series, getAllSeries, get series by name, getSeriesByName, get series by index, getSeriesByPos