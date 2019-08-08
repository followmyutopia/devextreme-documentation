===========================================================================
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
A lookup column restricts the set of values that can be chosen when a user edits or filters the column. In a lookup column, each cell is a drop-down menu. You can use a lookup column when you need to substitute displayed values with required values. For example, consider that you have two arrays of objects: `drivers` and `buses`.

    <!--JavaScript-->var drivers = [
        { driverID: 1, firstName: "John", lastName: "Smith", busID: 2 },
        { driverID: 2, firstName: "Lizzy", lastName: "Cook", busID: 1 },
        { driverID: 3, firstName: "Brian", lastName: "Hawkins", busID: 3 }
    ];

    var buses = [
        { busID: 1, plates: "123456" },
        { busID: 2, plates: "AB-1234" },
        { busID: 3, plates: "CD-9876" }
    ];

All `drivers` have the `busID` field, which refers to a bus. If `drivers` is the main [dataSource]({basewidgetpath}/Configuration/#dataSource), the *Bus ID* column displays bus IDs, which provides little information to a user. It will be more useful to display bus license plates instead of IDs. For this, the `buses` array must be set as a lookup [dataSource]({basewidgetpath}/Configuration/columns/lookup/#dataSource) for the *Bus ID* column. Then, the names of data fields must be assigned to the [valueExpr]({basewidgetpath}/Configuration/columns/lookup/#valueExpr) and [displayExpr]({basewidgetpath}/Configuration/columns/lookup/#displayExpr) options. Values from the **valueExpr** data field will be replaced with values from the **displayExpr** data field.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            dataSource: drivers,
            // ...
            columns: [{
                dataField: "busID",
                lookup: {
                    dataSource: buses,
                    valueExpr: "busID",
                    displayExpr: "plates"
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-data-grid [dataSource]="drivers">
        <dxi-column dataField="busID">
            <dxo-lookup
                [dataSource]="buses"
                valueExpr="busID"
                displayExpr="plates">
            </dxo-lookup>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        drivers = [
            { driverID: 1, firstName: "John", lastName: "Smith", busID: 2 },
            { driverID: 2, firstName: "Lizzy", lastName: "Cook", busID: 1 },
            { driverID: 3, firstName: "Brian", lastName: "Hawkins", busID: 3 }
        ];
        buses = [
            { busID: 1, plates: "123456" },
            { busID: 2, plates: "AB-1234" },
            { busID: 3, plates: "CD-9876" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

With this code, the *Bus ID* column contains license plates instead of IDs. Moreover, the user can choose a plate number from the drop-down menu when editing cells or applying a filter to this column.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/CascadingLookups/jQuery/Light/"
}

#####See Also#####
- [Bind a Lookup Column to a Custom Data Source](/Documentation/Guide/Widgets/DataGrid/How_To/Bind_a_Lookup_Column_to_a_Custom_Data_Source/)
- [Customize Editors](/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors)
- [Enhance Performance on Large Datasets - Lookup Optimization](/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Lookup_Optimization)
<!--/fullDescription-->