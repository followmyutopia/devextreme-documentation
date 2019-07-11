<!--id-->DataSource.Options.onLoadingChanged<!--/id-->
<!--EventForAction-->DataSource.loadingChanged<!--/EventForAction-->
===========================================================================
<!--type-->function(isLoading)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when the data loading status changes.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        onLoadingChanged: function (isLoading) {
            // Your code goes here
        }
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                onLoadingChanged: (isLoading) => {
                    // Your code goes here
                }
            });
        }
    }

---

<!--/fullDescription-->
<!--typeFunctionParamName1-->isLoading<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Boolean<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Indicates whether data is being loaded.
<!--/typeFunctionParamDescription1-->
