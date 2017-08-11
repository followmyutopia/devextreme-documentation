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
In most cases, you should pass the name of a field by whose value data items are searched. Assign an array of field names to this option if you need to search elements by several field values.

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: myStore,
        searchExpr: ["firstName", "lastName"]
    });

[note]Searching works with source data of plain structure only. Subsequently, data can be transformed to hierarchical structure using the **DataSource**'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option.

#####See Also#####
- [Search Api section](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api)
- [Getters and Setters section](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters)
<!--/fullDescription-->