To export the **PieChart** using the API, call the [exportTo(fileName, format)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#exportTofileName_format) method passing the needed file name and format (*"PNG"*, *"PDF"*, *"JPEG"*, *"SVG"* or *"GIF"*) as the arguments. To print the **PieChart**, call the [print()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#print) method. This command opens the browser's **Print** window.

---
##### jQuery

    <!--JavaScript-->
    var pieChart = $("#pieChartContainer").dxPieChart("instance");
    pieChart.exportTo('Exported Chart', 'PDF');
    pieChart.print();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxPieChartModule, DxPieChartComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        exportChart () {
            this.pieChart.instance.exportTo('Exported Chart', 'PDF');
        };
        printChart () {
            this.pieChart.instance.print();
        };
    }

---

You can also export several widgets at once using their SVG markup. Gather the markup from all required widgets by calling the [DevExpress.viz.getMarkup(widgetInstances)](/Documentation/ApiReference/Common/utils/viz/Methods/#getMarkupwidgetInstances) method, and then pass the markup to the [DevExpress.viz.exportFromMarkup(markup, options)](/Documentation/ApiReference/Common/utils/viz/Methods/#exportFromMarkupmarkup_options) method.

---
##### jQuery

    <!--JavaScript-->
    var pieChart1 = $("#pieChartContainer1").dxPieChart("instance");
    var pieChart2 = $("#pieChartContainer2").dxPieChart("instance");
    var chartMarkup = DevExpress.viz.getMarkup([pieChart1, pieChart2]);
    
    DevExpress.viz.exportFromMarkup(chartMarkup, {
        height: 768,
        width: 1024,
        fileName: "Exported Charts",
        format: "PDF"
    });

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxPieChartModule, DxPieChartComponent } from 'devextreme-angular';
    import exportMethods from 'devextreme/viz/export';
    // ...
    export class AppComponent {
        @ViewChild('pieChartContainer1') pieChart1: DxPieChartComponent;
        @ViewChild('pieChartContainer2') pieChart2: DxPieChartComponent;
        exportSeveralCharts () {
            let chartMarkup = exportMethods.getMarkup([this.pieChart1.instance, this.pieChart2.instance]);
            exportMethods.exportFromMarkup(chartMarkup, {
                height: 768,
                width: 1024,
                fileName: "Exported Charts",
                format: "PDF"
            });
        };
    }

    <!--HTML-->
    <dx-pie-chart id="pieChartContainer1" ... ></dx-pie-chart>
    <dx-pie-chart id="pieChartContainer2" ... ></dx-pie-chart>

---