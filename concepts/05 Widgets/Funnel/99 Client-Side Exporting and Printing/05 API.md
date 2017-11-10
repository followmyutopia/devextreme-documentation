To export the **Funnel** using the API, call the [exportTo(fileName, format)](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#exportTofileName_format) method passing the needed file name and format (*"PNG"*, *"PDF"*, *"JPEG"*, *"SVG"* or *"GIF"*) as the arguments. To print the **Funnel**, call the [print()](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#print) method. This command opens the browser's **Print** window.

---
##### jQuery

    <!--JavaScript-->
    var funnel = $("#funnelContainer").dxFunnel("instance");
    funnel.exportTo('Exported Funnel', 'PDF');
    funnel.print();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxFunnelModule, DxFunnelComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxFunnelComponent) funnel: DxFunnelComponent;
        exportFunnel () {
            this.funnel.instance.exportTo('Exported Funnel', 'PDF');
        };
        printFunnel () {
            this.funnel.instance.print();
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

You can also export several widgets at once using their SVG markup. Gather the markup from all required widgets by calling the [DevExpress.viz.getMarkup(widgetInstances)](/Documentation/ApiReference/Common/utils/viz/Methods/#getMarkupwidgetInstances) method, and then pass the markup to the [DevExpress.viz.exportFromMarkup(markup, options)](/Documentation/ApiReference/Common/utils/viz/Methods/#exportFromMarkupmarkup_options) method.

---
##### jQuery

    <!--JavaScript-->
    var funnel1 = $("#funnelContainer1").dxFunnel("instance");
    var funnel2 = $("#funnelContainer2").dxFunnel("instance");
    var funnelMarkup = DevExpress.viz.getMarkup([funnel1, funnel2]);
    
    DevExpress.viz.exportFromMarkup(funnelMarkup, {
        height: 768,
        width: 1024,
        fileName: "Exported Funnels",
        format: "PDF"
    });

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxFunnelModule, DxFunnelComponent } from 'devextreme-angular';
    import exportMethods from 'devextreme/viz/export';
    // ...
    export class AppComponent {
        @ViewChild('funnelContainer1') funnel1: DxFunnelComponent;
        @ViewChild('funnelContainer2') funnel2: DxFunnelComponent;
        exportSeveralFunnels () {
            let funnelMarkup = exportMethods.getMarkup([this.funnel1.instance, this.funnel2.instance]);
            exportMethods.exportFromMarkup(funnelMarkup, {
                height: 768,
                width: 1024,
                fileName: "Exported Funnels",
                format: "PDF"
            });
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-funnel id="funnelContainer1" ... ></dx-funnel>
    <dx-funnel id="funnelContainer2" ... ></dx-funnel>

---