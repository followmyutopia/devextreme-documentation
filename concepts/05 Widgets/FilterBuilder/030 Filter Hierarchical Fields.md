In the following code, the **FilterBuilder** allows filtering by three fields, two of which are hierarchical. The [allowHierarchicalFields](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#allowHierarchicalFields) option set to **true** specifies displaying hierarchical fields as a tree.

---
#####jQuery

    <!--JavaScript-->
    var orders = [{
        orderID: 35703,
        address: {
            state: "California",
            city: "Los Angeles"
        }
    }, {
        orderID: 35711,
        address: {
            state: "California",
            city: "San Jose"
        }
    }, 
    // ...
    ];

    $(function() {
        $("#filterBuilderContainer").dxFilterBuilder({
            fields: [
                { dataField: "orderID" },
                { dataField: "address.state" }, 
                { dataField: "address.city" }
            ],
            allowHierarchicalFields: true
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxFilterBuilderModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        orders = [{
            orderID: 35703,
            address: {
                state: "California",
                city: "Los Angeles"
            }
        }, {
            orderID: 35711,
            address: {
                state: "California",
                city: "San Jose"
            }
        }, 
        // ...
        ];

        fields = [
            { dataField: "orderID" },
            { dataField: "address.state" }, 
            { dataField: "address.city" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-filter-builder 
        [fields]="fields">
    </dx-filter-builder>

---

![DevExtreme HTML5 JavaScript Filter Builder Hierarchical Fields](/Content/images/doc/18_1/FilterBuilder/visual_elements/hierarchical_fields.png)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/FilterBuilder/Angular/Light/"
}

#####See Also#####
- [Integrate with a Widget](/Documentation/Guide/Widgets/FilterBuilder/Integrate_with_a_Widget/)
