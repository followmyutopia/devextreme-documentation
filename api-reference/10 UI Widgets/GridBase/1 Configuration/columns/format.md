<!--id-->GridBaseColumn.format<!--/id-->
===========================================================================
<!--default-->''<!--/default-->
<!--type-->format<!--/type-->
===========================================================================

<!--shortDescription-->
Formats a value before it is displayed in a column cell.
<!--/shortDescription-->

<!--fullDescription-->
This option also controls the user input in cells that use the [DateBox](/Documentation/Guide/Widgets/DateBox/Overview/) widget for editing. For cells that use other widgets, you can specify the [editorOptions]({basewidgetpath}/Configuration/columns/#editorOptions).**format** option.

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: orders,
            editing: {
                allowUpdating: true
            },
            columns: [{
                dataField: "SaleAmount",
                format: "currency",
                editorOptions: {
                    format: "$ #,##0.##"
                }
            }, 
            // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-{widget-name}
        [dataSource]="orders">
        <dxo-editing [allowUpdating]="true"></dxo-editing>
        <dxi-column
            dataField="SaleAmount"
            format="currency"
            [editorOptions]="{ format: '$ #,##0.##' }">
        </dxi-column>
    </dx-{widget-name}>

---

#####See Also#####
- [format](/Documentation/ApiReference/Common/Object_Structures/format/)
<!--/fullDescription-->