<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
Unlike normal columns, band columns do not hold data. Instead, they collect two or more columns under one column header. In most cases, to set up this layout, you can declare the band column using a hierarchical structure. For example, the following code bands three columns under the *"Address"* header.

---
##### jQuery

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

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column caption="Address">
            <dxi-column dataField="City"></dxi-column>
            <dxi-column dataField="Street"></dxi-column>
            <dxi-column dataField="Apartment"></dxi-column>
        </dxi-column>
    </dx-tree-list>
    
---

If you use the [customizeColumns]({basewidgetpath}/Configuration/#customizeColumns) option to configure columns, the hierarchical structure cannot be implemented. To band columns in this case, use the **isBand** and [ownerBand]({basewidgetpath}/Configuration/columns/#ownerBand) options.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            customizeColumns: function(columns) {
                columns.push({ // Pushes the "Address" band column into the "columns" array
                    caption: 'Address',
                    isBand: true
                });
                
                var addressFields = ['City', 'Street', 'Apartment'];
                for (var i = 0; i < columns.length - 1; i++) {
                    if (addressFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Address",
                        columns[i].ownerBand = columns.length - 1; // assigns "Address" as the owner band column
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    export class AppComponent {
        customizeColumns (columns) {
            columns.push({ // Pushes the "Address" band column into the "columns" array
                caption: "Address",
                isBand: true
            });
    
            var addressFields = ['City', 'Street', 'Apartment'];
            for (var i = 0; i < columns.length - 1; i++) {
                if (addressFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Address",
                    columns[i].ownerBand = columns.length - 1; // assigns "Address" as the owner band column
            }
        }
    }

    <!--HTML-->
    <dx-tree-list ...
        [customizeColumns]="customizeColumns">
    </dx-tree-list>
    
---

[note]Band columns must not have the **dataField** option set.

The column with the **isBand** flag set to **true** can have the following properties only.

- [alignment]({basewidgetpath}/Configuration/columns/#alignment)
- [allowFixing]({basewidgetpath}/Configuration/columns/#allowFixing)
- [allowHiding]({basewidgetpath}/Configuration/columns/#allowHiding)
- [allowReordering]({basewidgetpath}/Configuration/columns/#allowReordering)
- [caption]({basewidgetpath}/Configuration/columns/#caption)
- [cssClass]({basewidgetpath}/Configuration/columns/#cssClass)
- [fixed]({basewidgetpath}/Configuration/columns/#fixed)
- [fixedPosition]({basewidgetpath}/Configuration/columns/#fixedPosition)
- [headerCellTemplate]({basewidgetpath}/Configuration/columns/#headerCellTemplate)
- [name]({basewidgetpath}/Configuration/columns/#name)
- [visible]({basewidgetpath}/Configuration/columns/#visible)
- [visibleIndex]({basewidgetpath}/Configuration/columns/#visibleIndex)

#####See Also#####
- **columns**.[columns](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/columns/)
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->