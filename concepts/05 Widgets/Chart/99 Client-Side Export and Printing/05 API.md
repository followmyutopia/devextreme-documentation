To export a widget using the API, call the [exportTo(fileName, format)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#exportTofileName_format) method passing the needed file name and format (*"PNG"*, *"PDF"*, *"JPEG"*, *"SVG"* or *"GIF"*) as the arguments. To print a widget, call the [print()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#print) method. This command opens the browser's **Print** window.

---
##### jQuery

    <!--JavaScript-->
    var chart = $("#chartContainer").dxChart("instance");
    chart.exportTo('Exported Chart', 'PDF');
    chart.print();

##### Angular

    <!--JavaScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxChartModule, DxChartComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent) chart: DxChartComponent;
        exportChart () {
            this.chart.instance.exportTo('Exported Chart', 'PDF');
        };
        printChart () {
            this.chart.instance.print();
        };
    }

---


You can also export several widgets at once using their SVG markup. Gather the markup from all required widgets by calling the [DevExpress.viz.getMarkup(widgetInstances)](/Documentation/ApiReference/Common/utils/viz/Methods/#getMarkupwidgetInstances) method, and then pass the markup to the [DevExpress.viz.exportFromMarkup(markup, options)](/Documentation/ApiReference/Common/utils/viz/Methods/#exportFromMarkupmarkup_options) method.

---
##### jQuery

    <!--JavaScript-->
    var chart1 = $("#chartContainer1").dxChart("instance");
    var chart2 = $("#chartContainer2").dxChart("instance");
    var chartMarkup = DevExpress.viz.getMarkup([chart1, chart2]);
    
    DevExpress.viz.exportFromMarkup(chartMarkup, {
        height: 768,
        width: 1024,
        fileName: "Exported Charts",
        format: "PDF"
    });

##### Angular

    <!--JavaScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxChartModule, DxChartComponent } from 'devextreme-angular';
    import exportMethods from 'devextreme/viz/export';
    // ...
    export class AppComponent {
        @ViewChild('chartContainer1') chart1: DxChartComponent;
        @ViewChild('chartContainer2') chart2: DxChartComponent;
        exportSeveralCharts () {
            let chartMarkup = exportMethods.getMarkup([this.chart1.instance, this.chart2.instance]);
            exportMethods.exportFromMarkup(chartMarkup, {
                height: 768,
                width: 1024,
                fileName: "Exported Charts",
                format: "PDF"
            });
        };
    }

    <!--HTML-->
    <dx-chart id="chartContainer1" ... ></dx-chart>
    <dx-chart id="chartContainer2" ... ></dx-chart>

---