<!--EventForAction-->..\4 Events\changed.md<!--/EventForAction-->
===========================================================================
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after data is loaded.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        onChanged: function () {
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
                onChanged: () => {
                    // Your code goes here
                }
            });
        }
    }

---
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about changes.      
Appears only when the **push(changes)** method is called and the [reshapeOnPush](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#reshapeOnPush) option is **false**.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->changes<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Array<any><!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The received changes.       
<!--/typeFunctionParamDescription1_field1-->
