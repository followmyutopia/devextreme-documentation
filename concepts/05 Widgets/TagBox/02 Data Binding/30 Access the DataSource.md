Regardless of the data source you use, the **TagBox** always wraps it in a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). Call the [getDataSource()](/Documentation/ApiReference/UI_Widgets/dxTagBox/Methods/#getDataSource) method to get the instance of the **DataSource**.

---
#####jQuery

    <!--JavaScript-->var tagBoxDataSource = $("#tagBoxContainer").dxTagBox("getDataSource");

#####Angular

    <!--TypeScript-->
    import { ViewChild, ... } from "@angular/core";
    import { DxTagBoxModule, DxTagBoxComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTagBoxComponent, { static: false }) tagBox: DxTagBoxComponent;
        // Prior to Angular 8
        // @ViewChild(DxTagBoxComponent) tagBox: DxTagBoxComponent;
        ds: any = {};
        getDataSource () {
            this.ds = this.tagBox.instance.getDataSource();
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

---

Now, you can call [any method](/Documentation/ApiReference/Data_Layer/DataSource/Methods/) the **DataSource** exposes. For example, you can reload data using the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method.

    <!--JavaScript-->tagBoxDataSource.load();

#####See Also#####
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [TagBox Demos](/Demos/WidgetsGallery/Demo/Tag_Box/Overview/jQuery/Light/)

[tags]tagBox, data binding, access data source, getDataSource, reload data
