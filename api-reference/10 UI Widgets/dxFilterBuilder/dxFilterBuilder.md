<!--widgettree-->
allowHierarchicalFields: true,
value: [["UnitPrice", "=", 12], "and", ["Shipped", "=", "2017/12/1"]],
fields: [{
    dataField: "Category.Name",
    lookup: {
        dataSource: [
            "Televisions",
            "Monitors",
            "Projectors"
        ]
    }
}, {
    dataField: "Category.Description"
}, {
    dataField: "UnitPrice",
    dataType: "number"
}, {
    dataField: "Shipped",
    dataType: "date"
}]
<!--/widgettree-->
===========================================================================
<!--module-->ui/filter_builder<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
The **FilterBuilder** widget allows a user to build complex filter expressions with an unlimited number of filter conditions, combined by logical operations using the UI.
<!--/shortDescription-->

<!--fullDescription-->
You can create a widget using one of the following approaches: 

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#filterBuilder").dxFilterBuilder({
            value: ["Category", "contains", "Tel"],
            fields: [{
                dataField: "Category"
            }, {
                dataField: "Shipped",
                caption: "Shipment Date",
                dataType: "date"
            }, {
                dataField: "UnitPrice",
                dataType: "number"
            }]
        });
    });

    <!--HTML--><div id="filterBuilder"></div>

#####Angular

    <!--HTML-->
    <dx-filter-builder
        [value]='["Category", "contains", "Tel"]'>
        <dxi-field
            dataField="Category">
        </dxi-field>
        <dxi-field
            dataField="Shipped"
            caption="Shipment Date"
            dataType="date">
        </dxi-field>
        <dxi-field
            dataField="UnitPrice"
            dataType="number">
        </dxi-field>
    </dx-filter-builder>

    <!--TypeScript-->
    import { DxFilterBuilderModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-filter-builder="{
            value: ['Category', 'contains', 'Tel'],
            fields: [{
                dataField: 'Category'
            }, {
                dataField: 'Shipped',
                caption: 'Shipment Date',
                dataType: 'date'
            }, {
                dataField: 'UnitPrice',
                dataType: 'number'
            }]
        }"></div>
    </div>

#####Knockout

    <!--HTML-->
    <div data-bind="dxFilterBuilder: {
        value: ['Category', 'contains', 'Tel'],
        fields: [{
            dataField: 'Category'
        }, {
            dataField: 'Shipped',
            caption: 'Shipment Date',
            dataType: 'date'
        }, {
            dataField: 'UnitPrice',
            dataType: 'number'
        }]
    }"></div>

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FilterBuilder()
        .ID("filterBuilder")
        .Value(new object[] { "Category", "contains", "Tel" })
        .Fields(fields => {
            fields.Add().DataField("CompanyName");
            fields.Add()
                    .DataField("City")
                    .Caption("Shipment Date")
                    .DataType(FilterBuilderFieldDataType.Date);
            fields.Add()
                    .DataField("State");
                    .DataType(FilterBuilderFieldDataType.Number);
        })
    )

    <!--Razor VB-->
    @(Html.DevExtreme().FilterBuilder() _
        .ID("filterBuilder") _
        .Value(new object[] { "Category", "contains", "Tel" }) _
        .Fields(Sub(fields)
            fields.Add().DataField("CompanyName")
            fields.Add()
                    .DataField("City")
                    .Caption("Shipment Date")
                    .DataType(FilterBuilderFieldDataType.Date)
            fields.Add()
                    .DataField("State");
                    .DataType(FilterBuilderFieldDataType.Number)
        End Sub)
    )

---

#####See Also#####
- [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/)

<!--/fullDescription-->