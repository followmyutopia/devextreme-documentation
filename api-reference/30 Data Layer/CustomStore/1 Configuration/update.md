===========================================================================
<!--type-->function(key, values)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom implementation of the [update(key, values)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#updatekey_values) method.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        // ...
        update: function (key, values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/myEntity" + encodeURIComponent(key),
                method: "PUT",
                data: values
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
                update: (key, values) => {
                    return httpClient.put("http://mydomain.com/MyDataService/myEntity" + encodeURIComponent(key), values)
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
The key of the data item to be updated.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->values<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
An object with new values for the data item.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->Promise<any><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise that is resolved after the data item is updated. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/typeFunctionReturnDescription-->