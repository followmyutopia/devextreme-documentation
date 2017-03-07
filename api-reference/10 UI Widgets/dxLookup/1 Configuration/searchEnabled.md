<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Specifies whether to display the search bar.<!--/d-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
A Boolean value specifying whether or not the search bar is visible.
<!--/shortDescription-->

<!--fullDescription-->
To specify a field by which to search items, assign the required field name to the [searchExpr](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr) configuration option of the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object passed to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#dataSource) option of the widget.

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: myStore,
        searchExpr: "firstName"
    });

If you need to search items by several field values, assign an array of field names to the **searchExpr** option of the **DataSource**.

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: myStore,
        searchExpr: ["firstName", "lastName"]
    });

For more information on searching, refer to the [Search Api section](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api) of the Data Layer article.


<!--/fullDescription-->