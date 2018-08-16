Paging options are set in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/): [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) enables paging; [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) specifies how many data items a page should contain.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
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
    import DataSource from "devextreme/data/data_source";
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource: any = {};
        constructor() {
            this.lookupData = new DataSource({
                store: /* A store is configured here */,
                paginate: true,
                pageSize: 10
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-lookup ...
        [dataSource]="lookupData">
    </dx-lookup>

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Lookup()
        .ID("lookup")
        .DataSource(d => d
            // Data access is configured here
        )
        .DataSourceOptions(o => o
            .Paginate(true)
            .PageSize(10)
        )
    )

---

**Lookup** renders the next page once a user scrolls the item list to the bottom. If you set the [pageLoadMode](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#pageLoadMode) to *"nextButton"*, **Lookup** renders the next page when a user clicks the **Next** button. You can change this button's text using the [nextButtonText](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#nextButtonText) option:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            // ...
            pageLoadMode: "nextButton",
            nextButtonText: "More"
        });
    });

#####Angular

    <!--HTML-->
    <dx-lookup ...
        pageLoadMode="nextButton"
        nextButtonText="More">
    </dx-lookup>

---

[Local arrays](/Documentation/Guide/Widgets/Lookup/Data_Binding/Simple_Array/Array_Only/) and remote datasets loaded using the **CustomStore** in [raw mode](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode) are *only rendered* page by page. In other cases, remote datasets are *also loaded* page by page if the server can partition data.

#####See Also#####
- **Data Binding**: [Web API Service](/Documentation/Guide/Widgets/Lookup/Data_Binding/Web_API_Service/) | [PHP Service](/Documentation/Guide/Widgets/Lookup/Data_Binding/PHP_Service/) | [MongoDB Service](/Documentation/Guide/Widgets/Lookup/Data_Binding/MongoDB_Service/) | [OData Service](/Documentation/Guide/Widgets/Lookup/Data_Binding/OData_Service/) | [Custom Sources](/Documentation/Guide/Widgets/Lookup/Data_Binding/Custom_Sources/) | [JavaScript Array](/Documentation/Guide/Widgets/Lookup/Data_Binding/Simple_Array/Array_Only/)
- [Lookup - Enable Grouping](/Documentation/Guide/Widgets/Lookup/Enable_Grouping/)
- [Lookup Demos](/Demos/WidgetsGallery/Demo/Lookup/Basics/)

[tags]lookup, paginate, page size, pageSize, loading mode
