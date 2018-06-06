<!--EventForAction-->..\4 Events\loadError.md<!--/EventForAction-->
===========================================================================
<!--type-->function(error)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when data loading fails.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        onLoadError: function (error) {
            console.log(error.message);
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
                onLoadError: (error) => {
                    console.log(error.message);
                }
            });
        }
    }

---
<!--/fullDescription-->
<!--typeFunctionParamName1-->error<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The error.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->message<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The error message.
<!--/typeFunctionParamDescription1_field1-->
