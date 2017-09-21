[note] Before accessing a point label, you must gain access to its series point. You can learn the details in the [Access a Series Point Using the API](/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/) topic.

To access a point label, call the [getLabel()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#getLabel) method on its series point. This method returns an object whose members are described in the [Label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Label/) section of the API reference. Note that for [Range Series](/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/), the **getLabel()** method returns an array of two **Label** objects.

---
##### jQuery

    <!--JavaScript-->var series = $("#chartContainer").dxChart("getSeriesByName", "Series 1");
    var seriesPoints = series.getAllPoints();
    var label = seriesPoints[0].getLabel();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxChartModule, DxChartComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent) chart: DxChartComponent;
        label: any = {};
        getPointLabel () {
            let series = this.chart.instance.getSeriesByName("Series 1");
            let seriesPoints = series.getAllPoints();
            this.label = seriesPoints[0].getLabel();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

Once you access a label, you can, for example, hide or show it by calling the **hide()** or **show()** method.

    <!--JavaScript-->label.hide();
    // label.show();

#####See Also#####
- [Access a Series Using the API](/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/)
- [Access a Series Point Using the API](/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/)
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, point labels, show point label, hide point label, label visibility 