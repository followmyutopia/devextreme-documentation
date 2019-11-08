Regardless of the data source you use, the **SelectBox** always wraps it in a [DataSource](/api-reference/30%20Data%20Layer/DataSource/DataSource.md '/Documentation/ApiReference/Data_Layer/DataSource/'). Call the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Methods/#getDataSource') method to get the instance of the **DataSource**.

---
#####jQuery

    <!--JavaScript-->var selectBoxDataSource = $("#selectBoxContainer").dxSelectBox("getDataSource");

#####Angular

    <!--TypeScript-->
    import { DxSelectBoxModule, DxSelectBoxComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxSelectBoxComponent, { static: false }) selectBox: DxSelectBoxComponent;
        // Prior to Angular 8
        // @ViewChild(DxSelectBoxComponent) selectBox: DxSelectBoxComponent;
        ds: any = {};
        getDataSource () {
            this.ds = this.selectBox.instance.getDataSource();
        }
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

---

Now, you can call [any method](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/Methods.md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/') the **DataSource** exposes. For example, you can reload data using the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method.

    <!--JavaScript-->selectBoxDataSource.load();

#####See Also#####
- [Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer/Data%20Layer.md '/Documentation/Guide/Data_Layer/Data_Layer/')
- [SelectBox Demos](http://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/Overview/)

[tags]selectBox, data binding, access data source, getDataSource, reload data
