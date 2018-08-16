===========================================================================
<!--type-->function(key)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom implementation of the [remove(key)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#removekey) method.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        // ...
        remove: function (key) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/myEntity" + encodeURIComponent(key),
                method: "DELETE",
            })
        }
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import CustomStore from "devextreme/data/custom_store";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.store = new CustomStore({
                // ...
                remove: (key) => {
                    return httpClient.delete("http://mydomain.com/MyDataService" + encodeURIComponent(key))
                        .toPromise();
                }
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            HttpClientModule 
        ],
        // ...
    })

---
<!--/fullDescription-->
<!--typeFunctionParamName1-->key<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object|String|Number<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The key of the data item to be removed.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Promise<void><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise that is resolved after the data item is removed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/typeFunctionReturnDescription-->