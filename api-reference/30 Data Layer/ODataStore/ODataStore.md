<!--id-->ODataStore<!--/id-->
===========================================================================
<!--module-->data/odata/store<!--/module-->
<!--export-->default<!--/export-->
<!--type-->Object<!--/type-->
<!--inherits-->..\Store\Store.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ODataStore** is a store that provides an interface for loading and editing data from an individual OData entity collection and handling related events.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery  

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "http://www.example.com/Northwind.svc/Products",
        key: "ProductID",
        keyType: "Int32",
        // Other ODataStore options go here
    });

    // ===== or inside the DataSource =====
    var dataSource = new DevExpress.data.DataSource({
        store: {
            type: "odata",
            url: "http://www.example.com/Northwind.svc/Products",
            key: "ProductID",
            keyType: "Int32",
            // Other ODataStore options go here
        },
        // Other DataSource options go here
    });

##### Angular  

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        store: ODataStore;
        dataSource: DataSource;
        constructor () {
            this.store = new ODataStore({
                url: "http://www.example.com/Northwind.svc/Products",
                key: "ProductID",
                keyType: "Int32",
                // Other ODataStore options go here
            });

            // ===== or inside the DataSource =====
            this.dataSource = new DataSource({
                store: new ODataStore({
                    url: "http://www.example.com/Northwind.svc/Products",
                    key: "ProductID",
                    keyType: "Int32",
                    // Other ODataStore options go here
                }),
                // Other DataSource options go here
            });
        }
    }

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.store = new DevExpress.data.ODataStore({
                url: "http://www.example.com/Northwind.svc/Products",
                key: "ProductID",
                keyType: "Int32",
                // Other ODataStore options go here
            });

            // ===== or inside the DataSource =====
            $scope.dataSource = new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "http://www.example.com/Northwind.svc/Products",
                    key: "ProductID",
                    keyType: "Int32",
                    // Other ODataStore options go here
                },
                // Other DataSource options go here
            });
        });

##### Knockout  

    <!--JavaScript-->    
    var viewModel = {
        store: new DevExpress.data.ODataStore({
            url: "http://www.example.com/Northwind.svc/Products",
            key: "ProductID",
            keyType: "Int32",
            // Other ODataStore options go here
        })

        // ===== or inside the DataSource =====
        dataSource: new DevExpress.data.DataSource({
            store: {
                type: "odata",
                url: "http://www.example.com/Northwind.svc/Products",
                key: "ProductID",
                keyType: "Int32",
                // Other ODataStore options go here
            },
            // Other DataSource options go here
        })
    };

    ko.applyBindings(viewModel);

##### ASP.NET MVC Controls

    <!--Razor C#-->@(Html.DevExtreme().WidgetName()
        .DataSource(ds => ds.OData()
            .Url("http://www.example.com/Northwind.svc/Products")
            .Key("ProductID")
            .KeyType(EdmType.Int32)
            // Other ODataStore options go here
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .DataSource(Function(ds)
            Return ds.OData() _
                     .Url("http://www.example.com/Northwind.svc/Products") _
                     .Key("ProductID") _
                     .KeyType(EdmType.Int32) _
                     @* ... *@
                     @* Other ODataStore options go here *@
                     @* ... *@
        End Function)
    )

---

To access an entire OData service, use the [ODataContext](/Documentation/ApiReference/Data_Layer/ODataContext/) instead.

#include datalayer-store-note-immutable with { name: "ODataStore" }

#####See Also#####
- [DataSource API Reference](/Documentation/ApiReference/Data_Layer/DataSource/)
- [DataSource Examples - OData](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)
<!--/fullDescription-->