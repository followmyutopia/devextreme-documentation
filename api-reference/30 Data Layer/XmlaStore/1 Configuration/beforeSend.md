===========================================================================
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a function that customizes the request before it is sent to the server.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.XmlaStore({
        url: "https://my-web-srv01/OLAP/msmdpump.dll",
        catalog: "AdventureWorksDW2012",
        cube: "Adventure Works",
        beforeSend: function (e) {  
            e.headers = {
                "Custom Header": "value"
            };
        }
    });

    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // ...
        store: store
    });

##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import XmlaStore from "devextreme/ui/pivot_grid/xmla_store";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                store: new XmlaStore({
                    url: "https://my-web-srv01/OLAP/msmdpump.dll",
                    catalog: "AdventureWorksDW2012",
                    cube: "Adventure Works",
                    beforeSend: (e) => {
                        e.headers = {
                            "Custom Header": "value"
                        }
                    }
                })
            });
        }
    }

---
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The request parameters. When jQuery is used, this object can contain [jQuery.ajax()](http://api.jquery.com/jquery.ajax/)-supported fields.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->url<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The request URL.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->method<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->String<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The request method ("GET", "POST", "PATCH", or "MERGE").
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->headers<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The request headers.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->xhrFields<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Native [XMLHttpRequest object properties](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Properties).
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->data<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->String<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
A query string that contains data to be sent to the server.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->dataType<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->String<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The expected result's data type. 
<!--/typeFunctionParamDescription1_field6-->
