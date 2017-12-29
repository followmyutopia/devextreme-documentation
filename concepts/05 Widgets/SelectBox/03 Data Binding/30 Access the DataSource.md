Regardless of the data source you use, the **SelectBox** always wraps it in a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). Call the [getDataSource()](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Methods/#getDataSource) method to get the instance of the **DataSource**.

---
#####jQuery

    <!--JavaScript-->var selectBoxDataSource = $("#selectBoxContainer").dxSelectBox("getDataSource");

#####Angular

    <!--TypeScript-->
    import { DxSelectBoxModule, DxSelectBoxComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxSelectBoxComponent) selectBox: DxSelectBoxComponent;
        let selectBoxDataSource = this.selectBox.instance.getDataSource();
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

---

Now, you can call [any method](/Documentation/ApiReference/Data_Layer/DataSource/Methods/) the **DataSource** exposes. For example, you can reload data using the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method.

    <!--JavaScript-->selectBoxDataSource.load();

#####See Also#####
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [SelectBox Demos](/Demos/WidgetsGallery/Demo/Select_Box/Overview/jQuery/Light/)

[tags]selectBox, data binding, access data source, getDataSource, reload data
