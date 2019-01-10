===================================================================
===================================================================

<!--shortDescription-->
Gets the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance.
<!--/shortDescription-->

<!--returnType-->DataSource<!--/returnType-->
<!--returnDescription-->
The **DataSource** instance.
<!--/returnDescription-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    let ds = $("#{widgetName}Container").dx{WidgetName}("getDataSource");

#####Angular

     <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { Dx{WidgetName}Component } from "devextreme-angular";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild(Dx{WidgetName}Component) {widgetName}: Dx{WidgetName}Component;
        ds: any = {};
        getDataSource() {
            this.ds = this.{widgetName}.instance.getDataSource();
        }
    }

---

After you get the **DataSource** instance, you can call [any method it exposes](/Documentation/ApiReference/Data_Layer/DataSource/Methods/), for example, [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load):

    <!--JavaScript-->
    ds.load();

[note] The **getDataSource()** method returns the **DataSource** instance even if the widget's [dataSource]({basewidgetpath}/Configuration/#dataSource) option was given a simple array.

#####See Also#####
#include common-link-callmethods
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Data Layer - DataSource Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/)
<!--/fullDescription-->