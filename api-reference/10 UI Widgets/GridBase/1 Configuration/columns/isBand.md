<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the column bands other columns or not.
<!--/shortDescription-->

<!--fullDescription-->
Unlike normal columns, band columns do not hold data. Instead, they collect two or more columns under one column header. In most cases, to set up this layout, you can declare the band column using a hierarchical structure. For example, the following code bands three columns under the *"Address"* header.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        columns: [{
            caption: 'Address',
            columns: ['City', 'Street', 'Apartment']
        }, {
            // ...
        }]
    };

If you use the [customizeColumns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeColumns) option to configure columns, the hierarchical structure cannot be implemented. To band columns in this case, use the **isBand** and [ownerBand](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#ownerBand) options.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        customizeColumns: function(columns) {
            columns.push({ // Pushes the "Address" band column into the "columns" array
                caption: 'Address',
                isBand: true
            });
            
            var addressFields = ['City', 'Street', 'Apartment'];
            for (var i = 0; i < columns.length-1; i++) {
                if (addressFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Address",
                    columns[i].ownerBand = columns.length-1; // assigns "Address" as the owner band column
            }
        }
    };

[note]Band columns must not have the **dataField** option set.

The column with the **isBand** flag set to *true* can have the following properties only.

- [alignment](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#alignment)
- [allowFixing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFixing)
- [allowHiding](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowHiding)
- [allowReordering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowReordering)
- [caption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption)
- [cssClass](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cssClass)
- [fixed](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed)
- [fixedPosition](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixedPosition)
- [headerCellTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#headerCellTemplate)
- [name](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#name)
- [visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible)
- [visibleIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visibleIndex)

<!--/fullDescription-->