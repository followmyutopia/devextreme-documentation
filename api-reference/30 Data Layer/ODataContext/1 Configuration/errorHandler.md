<!--id-->ODataContext.Options.errorHandler<!--/id-->
===========================================================================
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a function that is executed when the **ODataContext** throws an error.
<!--/shortDescription-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        // ...
        errorHandler: function(error) {
            console.log(error.message);
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
                // ...
                errorHandler: (error) => {
                    console.log(error.message);
                }
            })
        }
    }

---
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A JavaScript [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object extended with the following fields:
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->httpStatus<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The error code.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->errorDetails<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Error details. It is an OData [error response object](http://docs.oasis-open.org/odata/odata-json-format/v4.0/cs01/odata-json-format-v4.0-cs01.html#_Toc365464725) for OData-specific errors or a [jqXHR object](http://api.jquery.com/jQuery.ajax/#jqXHR) for other errors when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->requestOptions<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Request details. Contains the following fields:

- **accepts**: Object       
The data types that the client accepts mapped to their MIME types.

- **async**: Boolean     
Indicates whether the request was asynchronous or synchronous.

- **contentType**: String | Boolean       
The content type; **false** if no content type was specified.

- **data**: Object      
[Query options](http://docs.oasis-open.org/odata/odata/v4.01/cs01/part1-protocol/odata-v4.01-cs01-part1-protocol.html#sec_SystemQueryOptions).

- **dataType**: String      
The expected data type.

- **headers**: Object       
The request headers.

- **jsonp**: Boolean     
Indicates whether the request was sent using JSONP.

- **method**: String    
The request method ("GET", "POST", "PATCH", or "MERGE").

- **timeout**: Number       
The request timeout.

- **url**: String       
The request URL.

- **xhrFields**: Object     
Native [XMLHttpRequest object properties](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Properties) that were sent in the request.
<!--/typeFunctionParamDescription1_field3-->
