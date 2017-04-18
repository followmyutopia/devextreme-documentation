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
Columns banded by the current column.
<!--/shortDescription-->

<!--fullDescription-->
Unlike normal columns, band columns do not hold data. Instead, they collect two or more columns under one column header. To set up this layout, declare the band column using a hierarchical structure. For this, assign the nested columns to the **columns** field of the band column. For example, the following code declares the *"Address"* band column and nests three columns within it.

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                caption: 'Address',
                columns: ['City', 'Street', 'Apartment']
            }, {
                // ...
            }]
        });
    });

A nested column has almost every option a regular column has. These options are described in the [columns](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/) section of the Reference.

[note]There is an exception though: nested columns cannot be [fixed](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columnFixing/) alone, therefore specifying the [fixed](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/fixed/) and [fixedPosition](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/fixedPosition/) options for them is useless. However, the whole band column can be fixed as usual.

For example, the following code specifies the **width** and **sortOrder** options of the *"Street"* column nested within the fixed *"Address"* band column.

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                caption: 'Address',
                fixed: true,
                fixedPosition: 'right',
                columns: [
                    'City', {
                        dataField: 'Street',
                        width: 100,
                        sortOrder: 'asc'
                    },
                    'Apartment'
                ]
            }, {
                // ...
            }]
        });
    });

Band columns support hierarchies of any nesting level. It means that the following structure is acceptable.

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                caption: 'A',
                columns: [ 'A1', 'A2', {
                    caption: 'A3',
                    columns: ['A31', 'A32', {
                        caption: 'A33',
                        columns: ['A331', 'A332', 'A333']
                    }]
                }]
            }, {
                caption: 'B',
                columns: // ...
            }]
        });
    });

Band columns have the [isBand](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#isBand) flag. Banded columns have the [ownerBand](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#ownerBand) option set. Use these options to distinguish band and banded columns from regular ones in code.
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->