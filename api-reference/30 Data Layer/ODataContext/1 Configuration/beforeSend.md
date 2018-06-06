===========================================================================
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a function that customizes the request before it is sent to the server.
<!--/shortDescription-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "https://js.devexpress.com/Demos/DevAV/odata/",
        entities: { 
            Employees: { 
                key: "Employee_ID", 
                keyType: "Int32" 
            },
            Customers: { 
                key: "Customer_ID", 
                keyType: "Int32" 
            }
        },
        beforeSend: function (e) {  
            e.params = {
                "param1": "value1",
                "param2": "value2"
            };
            e.headers = {
                accept: "text/html"
            };
        }
    });

#####Angular

    <!--TypeScript-->
    import ODataContext from "devextreme/data/odata/context";
    // ...
    export class AppComponent {
        context: ODataContext;
        constructor() {
            this.context = new ODataContext({
                url: "https://js.devexpress.com/Demos/DevAV/odata/",
                entities: { 
                    Employees: { 
                        key: "Employee_ID", 
                        keyType: "Int32" 
                    },
                    Customers: { 
                        key: "Customer_ID", 
                        keyType: "Int32" 
                    }
                },
                beforeSend: function (e) {  
                    e.params = {
                        "param1": "value1",
                        "param2": "value2"
                    };
                    e.headers = {
                        accept: "text/html"
                    };
                }
            });
        }
    }

---

<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The request parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->url<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The request URL.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->async<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Boolean<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Indicates whether the request is asynchronous or synchronous.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->method<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->String<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The request method ("GET", "POST", "PATCH", or "MERGE").
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->timeout<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Number<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The request timeout.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->params<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Additional parameters.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->payload<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The request body; for example, when updating an item, this property holds an object with new values.        
Unavailable if the request method is "GET".
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->headers<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Object<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The request headers.
<!--/typeFunctionParamDescription1_field7-->
