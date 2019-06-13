<!--id-->Store.Options.errorHandler<!--/id-->
===========================================================================
<!--type-->function()<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the function that is executed when the store throws an error.
<!--/shortDescription-->

<!--fullDescription-->
This function accepts a JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object as the parameter.

---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // ...
        errorHandler: function (error) {
            console.log(error.message);
        }
    });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // ...
                errorHandler: function (error) {
                    console.log(error.message);
                }
            })
        }
    }
    
---
<!--/fullDescription-->