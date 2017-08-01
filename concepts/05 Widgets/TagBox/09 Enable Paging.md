Paging is configured in the widget's [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). Set the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) option to **true** and specify the number of items per page using the [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) option.

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.DataSource({
                loadMode: "raw",   
                load: function () {
                    return $.getJSON('https://mydomain.com/MyDataService');
                },
                paginate: true,
                pageSize: 5
            }),
            valueExpr: "Product_ID",
            displayExpr: "Product_Name"
        });
    });

#####See Also#####
- [Data Binding - Custom Sources](/Documentation/Guide/Widgets/TagBox/Data_Binding/Custom_Sources/)
- [TagBox Demos](/Demos/WidgetsGallery/Demo/TagBox/Overview/jQuery/Light/)

[tags]tagbox, tag box, paginate, page size, pageSize