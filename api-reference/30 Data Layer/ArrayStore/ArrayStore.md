===========================================================================
<!--module-->data/array_store<!--/module-->
<!--export-->default<!--/export-->
<!--type-->Object<!--/type-->
<!--inherits-->..\Store\Store.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ArrayStore** is a store that provides an interface for loading and editing an in-memory array and handling related events.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery  

    <!--JavaScript-->
    var states = [
        { id: 1, state: "Alabama", capital: "Montgomery" },
        { id: 2, state: "Alaska", capital: "Juneau" },
        { id: 3, state: "Arizona", capital: "Phoenix" },
        // ...
    ];

    var store = new DevExpress.data.ArrayStore({
        key: "id",
        data: states,
        // Other ArrayStore options go here
    });

    // ===== or a simplified version =====
    var store = new DevExpress.data.ArrayStore(states);

    // ===== or inside the DataSource =====
    var dataSource = new DevExpress.data.DataSource({
        store: {
            type: "array",
            key: "id",
            data: states,
            // Other ArrayStore options go here
        },
        // Other DataSource options go here
    });

##### Angular  

    <!--TypeScript-->
    import ArrayStore from "devextreme/data/array_store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        store: ArrayStore;
        dataSource: DataSource;
        states = [
            { id: 1, state: "Alabama", capital: "Montgomery" },
            { id: 2, state: "Alaska", capital: "Juneau" },
            { id: 3, state: "Arizona", capital: "Phoenix" },
            // ...
        ];
        constructor () {
            this.store = new ArrayStore({
                key: "id",
                data: this.states,
                // Other ArrayStore options go here
            });

            // ===== or a simplified version =====
            this.store = new ArrayStore(this.states);

            // ===== or inside the DataSource =====
            this.dataSource = new DataSource({
                store: new ArrayStore({
                    key: "id",
                    data: this.states,
                    // Other ArrayStore options go here
                }),
                // Other DataSource options go here
            });
        }
    }

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            var states = [
                { id: 1, state: "Alabama", capital: "Montgomery" },
                { id: 2, state: "Alaska", capital: "Juneau" },
                { id: 3, state: "Arizona", capital: "Phoenix" },
                // ...
            ];
            $scope.store = new DevExpress.data.ArrayStore({
                key: "id",
                data: states,
                // Other ArrayStore options go here
            });

            // ===== or a simplified version =====
            $scope.store = new DevExpress.data.ArrayStore(states);

            // ===== or inside the DataSource =====
            $scope.dataSource = new DevExpress.data.DataSource({
                store: {
                    type: "array",
                    key: "id",
                    data: states,
                    // Other ArrayStore options go here
                },
                // Other DataSource options go here
            });
        });

##### Knockout  

    <!--JavaScript-->
    var states = [
        { id: 1, state: "Alabama", capital: "Montgomery" },
        { id: 2, state: "Alaska", capital: "Juneau" },
        { id: 3, state: "Arizona", capital: "Phoenix" },
        // ...
    ];
    
    var viewModel = {
        store: new DevExpress.data.ArrayStore({
            key: "id",
            data: states,
            // Other ArrayStore options go here
        })

        // ===== or a simplified version =====
        store: new DevExpress.data.ArrayStore(states)

        // ===== or inside the DataSource =====
        dataSource: new DevExpress.data.DataSource({
            store: {
                type: "array",
                key: "id",
                data: states,
                // Other ArrayStore options go here
            },
            // Other DataSource options go here
        })
    };

    ko.applyBindings(viewModel);

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSource(ds => ds.Array()
            .Key("id")
            .Data(new[] {
                new { id = 1, state = "Alabama", capital = "Montgomery" },
                new { id = 2, state = "Alaska", capital = "Juneau" },
                new { id = 3, state = "Arizona", capital = "Phoenix" },
                // ...
            })
        )
    )
    @* ===== or a simplified version ===== *@
    @(Html.DevExtreme().WidgetName()
        .DataSource(new[] {
            new { id = 1, state = "Alabama", capital = "Montgomery" },
            new { id = 2, state = "Alaska", capital = "Juneau" },
            new { id = 3, state = "Arizona", capital = "Phoenix" },
            // ...
        }, "id")
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .DataSource(Function(ds)
            Return ds.Array() _
                     .Key("id") _
                     .Data({
                         New With { .id = 1, .state = "Alabama", .capital = "Montgomery" },
                         New With { .id = 2, .state = "Alaska", .capital = "Juneau" },
                         New With { .id = 3, .state = "Arizona", .capital = "Phoenix" }
                     })
        End Function)
    )
    @* ===== or a simplified version ===== *@
    @(Html.DevExtreme().WidgetName() _
        .DataSource({
            New With { .id = 1, .state = "Alabama", .capital = "Montgomery" },
            New With { .id = 2, .state = "Alaska", .capital = "Juneau" },
            New With { .id = 3, .state = "Arizona", .capital = "Phoenix" }
        }, "id")
    )

---

#####See Also#####
- [DataSource API Reference](/Documentation/ApiReference/Data_Layer/DataSource/)
- [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/)
<!--/fullDescription-->