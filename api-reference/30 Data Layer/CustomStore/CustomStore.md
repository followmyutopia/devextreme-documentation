<!--id-->CustomStore<!--/id-->
===========================================================================
<!--module-->data/custom_store<!--/module-->
<!--export-->default<!--/export-->
<!--type-->Object<!--/type-->
<!--inherits-->..\Store\Store.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **CustomStore** enables you to implement custom data access logic for consuming data from any source.
<!--/shortDescription-->

<!--fullDescription-->
DevExtreme provides extensions for [ASP.NET](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) and [PHP](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md) that configure the **CustomStore** and implement server-side data processing. A third-party extension is available for [MongoDB](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md). You can also implement the **CustomStore** manually.

The **CustomStore**'s implementation depends on whether data is processed on the client or server. For client-side data processing, implement the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function to load data from the data source. Refer to the [Load Data in the Raw Mode](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode) article for more information.

For server-side data processing, implement the **load** function to send data processing parameters to the server. The server should send back processed data. **load** and **CustomStore** have specifics that depend on the widget that uses the **CustomStore**. Refer to the [**load** description](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) for more information.

If your data source supports CRUD operations, implement the [insert](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert), [update](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#update), and [remove](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#remove) functions.

---
##### jQuery  

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        key: "id",
        load: function (loadOptions) {
            // ...
        },
        insert: function (values) {
            // ...
        },
        update: function (key, values) {
            // ...
        },
        remove: function (key) {
            // ...
        }
    });

    // ===== or inside the DataSource =====
    var dataSource = new DevExpress.data.DataSource({
        // ...
        // a mix of CustomStore and DataSource options
        // ...
    });

##### Angular  

    <!--TypeScript-->
    import CustomStore from "devextreme/data/custom_store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        store: CustomStore;
        dataSource: DataSource;
        constructor () {
            this.store = new CustomStore({
                key: "id",
                load: (loadOptions) => {
                    // ...
                },
                insert: (values) => {
                    // ...
                },
                update: (key, values) => {
                    // ...
                },
                remove: (key) => {
                    // ...
                }
            });

            // ===== or inside the DataSource =====
            this.dataSource = new DataSource({
               // ...
                // a mix of CustomStore and DataSource options
                // ...
            });
        }
    }

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.store = new DevExpress.data.CustomStore({
                key: "id",
                load: function (loadOptions) {
                    // ...
                },
                insert: function (values) {
                    // ...
                },
                update: function (key, values) {
                    // ...
                },
                remove: function (key) {
                    // ...
                }
            });

            // ===== or inside the DataSource =====
            $scope.dataSource = new DevExpress.data.DataSource({
                // ...
                // a mix of CustomStore and DataSource options
                // ...
            });
        });

##### Knockout  

    <!--JavaScript-->
    var viewModel = {
        store: new DevExpress.data.CustomStore({
            key: "id",
            load: function (loadOptions) {
                // ...
            },
            insert: function (values) {
                // ...
            },
            update: function (key, values) {
                // ...
            },
            remove: function (key) {
                // ...
            }
        })

        // ===== or inside the DataSource =====
        dataSource: new DevExpress.data.DataSource({
            // ...
            // a mix of CustomStore and DataSource options
            // ...
        })
    };

    ko.applyBindings(viewModel);

---

#include datalayer-store-note-immutable with { name: "CustomStore" }

#####See Also#####
- [DataSource API Reference](/Documentation/ApiReference/Data_Layer/DataSource/)
- [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
<!--/fullDescription-->