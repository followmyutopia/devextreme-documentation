===================================================================
===================================================================

<!--shortDescription-->
Invokes an OData operation that returns nothing. 
<!--/shortDescription-->

<!--paramName1-->operationName<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The operation's name
<!--/paramDescription1-->

<!--paramName2-->params<!--/paramName2-->
<!--paramType2-->Object<!--/paramType2-->
<!--paramDescription2-->
The operation's parameters.
<!--/paramDescription2-->

<!--paramName3-->httpMethod<!--/paramName3-->
<!--paramType3-->Object<!--/paramType3-->
<!--paramDescription3-->
The HTTP method for this operation ("GET", "POST", "PATCH", or "MERGE").            
"POST" by default.
<!--/paramDescription3-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation has completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        // ODataContext is configured here
    });
    context.invoke("Add", { fieldName: "fieldValue" }, "POST");

#####Angular

    <!--TypeScript-->
    import ODataContext from "devextreme/data/odata/context";
    // ...
    export class AppComponent {
        context: ODataContext;
        constructor() {
            this.context = new ODataContext({
                // ODataContext is configured here
            });
            this.context.invoke("Add", { fieldName: "fieldValue" }, "POST");
        }
    }

---

#####See Also#####
- [Invoking Service Operations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Invoking_Service_Operations)
<!--/fullDescription-->