===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies options of a lookup column.
<!--/shortDescription-->

<!--fullDescription-->
A lookup column restricts the set of values that can be chosen when a user edits or filters the column. In a lookup column, each cell is a drop-down menu. You can use a lookup column when you need to substitute displayed values with required values. For example, consider that you have two arrays of objects: `drivers` and `buses`.

    <!--JavaScript-->var drivers = [
        { driverID: 1, firstName: 'John', lastName: 'Smith', busID: 2 },
        { driverID: 2, firstName: 'Lizzy', lastName: 'Cook', busID: 1 },
        { driverID: 3, firstName: 'Brian', lastName: 'Hawkins', busID: 3 }
    ];

    var buses = [
        { busID: 1, plates: '123456' },
        { busID: 2, plates: 'AB-1234' },
        { busID: 3, plates: 'CD-9876' }
    ];

All `drivers` have the `busID` field, which refers to a bus. If `drivers` is the main [dataSource]({basewidgetpath}/Configuration/#dataSource), the *Bus ID* column displays bus IDs, which provides little information to a user. It will be more useful to display bus license plates instead of IDs. For this, the `buses` array must be set as a lookup [dataSource]({basewidgetpath}/Configuration/columns/lookup/#dataSource) for the *Bus ID* column. Then, the names of data fields must be assigned to the [valueExpr]({basewidgetpath}/Configuration/columns/lookup/#valueExpr) and [displayExpr]({basewidgetpath}/Configuration/columns/lookup/#displayExpr) options. Values from the **valueExpr** data field will be replaced with values from the **displayExpr** data field.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: drivers,
            // ...
            columns: [{
                dataField: 'busID',
                lookup: {
                    dataSource: buses,
                    valueExpr: 'busID',
                    displayExpr: 'plates'
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-{widget-name} [dataSource]="drivers">
        <dxi-column dataField="busID">
            <dxo-lookup
                [dataSource]="buses"
                valueExpr="busID"
                displayExpr="plates">
            </dxo-lookup>
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        drivers = [
            { driverID: 1, firstName: 'John', lastName: 'Smith', busID: 2 },
            { driverID: 2, firstName: 'Lizzy', lastName: 'Cook', busID: 1 },
            { driverID: 3, firstName: 'Brian', lastName: 'Hawkins', busID: 3 }
        ];
        buses = [
            { busID: 1, plates: '123456' },
            { busID: 2, plates: 'AB-1234' },
            { busID: 3, plates: 'CD-9876' }
        ];
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })
    
---

With this code, the *Bus ID* column contains license plates instead of IDs. Moreover, the user can choose a plate number from the drop-down menu when editing cells or applying a filter to this column.

#####See Also#####
- [Lookup Columns](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Lookup_Columns/)
<!--/fullDescription-->