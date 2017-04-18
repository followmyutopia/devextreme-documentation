<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->array<!--/type-->
===========================================================================

<!--shortDescription-->
Configures columns.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts an array of objects, where each object configures a single column. If a column does not need to be customized, this array may include the name of the field that provides data for this column.

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Title",
                caption: "Position"
            }, {
                dataField: "FullName",
                width: 300
            }, 
                "CompanyName",
                "City"
            ]
        });
    });

#####See Also#####
- [columnOption(id, options)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_options)
- [customizeColumns](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#customizeColumns)
<!--/fullDescription-->