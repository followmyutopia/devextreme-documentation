[note] Before accessing a point label, you must gain access to its series point. You can learn the details in the [Access a Point Using the API](/concepts/05%20Widgets/PieChart/10%20Series/45%20Access%20a%20Point%20Using%20the%20API.md '/Documentation/Guide/Widgets/PieChart/Series/Access_a_Point_Using_the_API/') topic.

To access a point label, call the [getLabel()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#getLabel) method of its series point. This method returns an object described in the [Label](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Label/Label.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Label/') section of the API reference.

---
##### jQuery

    <!--JavaScript-->var series = $("#pieChartContainer").dxPieChart("getAllSeries")[0];
    var seriesPoints = series.getAllPoints();
    var label = seriesPoints[0].getLabel();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        label: any = {};
        getPointLabel () {
            let series = this.pieChart.instance.getAllSeries()[0];
            let seriesPoints = series.getAllPoints();
            this.label = seriesPoints[0].getLabel();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

Once you access a label, you can, for example, hide or show it by calling the **hide()** or **show()** method.

    <!--JavaScript-->label.hide();
    // label.show();

#####See Also#####
- [PieChart Demos](/Demos/WidgetsGallery/Demo/Charts/Pie/jQuery/Light/)