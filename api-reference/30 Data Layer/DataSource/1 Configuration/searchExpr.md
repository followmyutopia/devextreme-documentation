<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->getter | array<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a value by which the required items are searched.
<!--/shortDescription-->

<!--fullDescription-->
In most cases, you should pass the name of a field by whose value data items are searched. If you need to search elements by several field values, assign an array of field names to this option.

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: myStore,
        searchExpr: ["firstName", "lastName"]
    });

For more information on searching, refer to the [Search Api section](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api) of the Data Layer article. For information on getters, refer to the [Getters and Setters section](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) of the Data Layer article.
<!--/fullDescription-->