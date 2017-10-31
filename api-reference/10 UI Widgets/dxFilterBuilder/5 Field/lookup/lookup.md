<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the field's lookup.
<!--/shortDescription-->

<!--fullDescription-->
Use the lookup when you need to restrict a set of values a user can choose or to substitute displayed values for required ones. For example, consider that you have the following array of objects and need to filter other widget's data by `driverID's`:

    <!--JavaScript-->
    var drivers = [
        { driverID: 1, name: 'John Smith' },
        { driverID: 2, name: 'Lizzy Cook' },
        { driverID: 3, name: 'Brian Hawkins' }
    ];

Displaying IDs is not informative to a user. Assign `name` to the [displayExpr](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/lookup/#displayExpr) option to display driver names and `driverID` to the [valueExpr](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/lookup/#valueExpr) to write IDs in the resulting filter expression.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#filterBuilder").dxFilterBuilder({
            fields: [{
                dataField: "Driver",
                lookup: {
                    dataSource: drivers,
                    valueExpr: 'driverID',
                    displayExpr: 'name'
                }
            },
            // ...
            ]
        });
    })

#####Angular

    <!--HTML-->
    <dx-filter-builder>
        <dxi-field
            dataField="Driver">
            <dxo-lookup 
                [dataSource]="drivers"
                valueExpr="driverID"
                displayExpr="name">
            </dxo-lookup> 
        </dxi-field>
    </dx-filter-builder>

    <!--TypeScript-->
    import { DxFilterBuilderModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        drivers = [
            { driverID: 1, name: 'John Smith' },
            { driverID: 2, name: 'Lizzy Cook' },
            { driverID: 3, name: 'Brian Hawkins' }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })

---

<!--/fullDescription-->