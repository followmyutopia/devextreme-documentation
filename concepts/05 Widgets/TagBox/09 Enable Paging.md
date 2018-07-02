Paging options are set in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/): [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) enables paging; [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) specifies how many data items a page should contain.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.DataSource({
                store: /* A store is configured here */,
                paginate: true,
                pageSize: 10
            }),
            // ...
        });
    });

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().TagBox()
        .ID("tagBox")
        .DataSource(d => d
            // Data access is configured here
        )
        .DataSourceOptions(o => o
            .Paginate(true)
            .PageSize(10)
        )
    )

---

[Local arrays](/Documentation/Guide/Widgets/TagBox/Data_Binding/Simple_Array/Array_Only/) and remote datasets loaded using the **CustomStore** in [raw mode](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode) are *only rendered* page by page. In other cases, remote datasets are *also loaded* page by page if the server can partition data.

#####See Also#####
- **Data Binding**: [Web API Service](/Documentation/Guide/Widgets/TagBox/Data_Binding/Web_API_Service/) | [PHP Service](/Documentation/Guide/Widgets/TagBox/Data_Binding/PHP_Service/) | [MongoDB Service](/Documentation/Guide/Widgets/TagBox/Data_Binding/MongoDB_Service/) | [OData Service](/Documentation/Guide/Widgets/TagBox/Data_Binding/OData_Service/) | [Custom Sources](/Documentation/Guide/Widgets/TagBox/Data_Binding/Custom_Sources/) | [JavaScript Array](/Documentation/Guide/Widgets/TagBox/Data_Binding/Simple_Array/Array_Only/)
- [TagBox Demos](/Demos/WidgetsGallery/Demo/TagBox/Overview/jQuery/Light/)

[tags]tagbox, tag box, paginate, page size, pageSize
