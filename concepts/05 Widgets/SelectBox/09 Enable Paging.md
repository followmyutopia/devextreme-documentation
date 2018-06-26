Paging enables the widget to load and render data in portions. Remote data loaded using the **CustomStore** in [raw mode](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode) and local data is only rendered one page at a time. In other cases, remote data is loaded and rendered one page at a time if the server can partition data.
 
Paging options are set in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/): [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) enables paging; [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) specifies how many data items a page should contain.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.DataSource({
                store: /* A store is configured here */,
                paginate: true,
                pageSize: 10
            }),
            // ...
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSelectBoxModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        selectBoxData: any = {};
        constructor() {
            this.selectBoxData = new DataSource({
                store: /* A store is configured here */,
                paginate: true,
                pageSize: 10
            });
        }
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule,
         ],
         // ...
     })

    <!--HTML-->
    <dx-select-box ...
        [dataSource]="selectBoxData">
    </dx-select-box>

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().SelectBox()
        .ID("selectBox")
        .DataSource(d => d
            // Data access is configured here
        )
        .DataSourceOptions(o => o
            .Paginate(true)
            .PageSize(10)
        )
    )

---

#####See Also#####
- [Data Binding - Custom Sources](/Documentation/Guide/Widgets/SelectBox/Data_Binding/Custom_Sources/)
- [SelectBox Demos](/Demos/WidgetsGallery/Demo/SelectBox/Overview/jQuery/Light/)

[tags]selectbox, select box, paginate, page size, pageSize
