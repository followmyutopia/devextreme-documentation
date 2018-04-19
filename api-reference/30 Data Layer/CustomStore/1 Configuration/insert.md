===========================================================================
<!--type-->function(values)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom implementation of the [insert(values)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#insertvalues) method.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        // ...
        insert: function (values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/myEntity",
                method: "POST",
                data: values
            })
        }
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import CustomStore from "devextreme/data/custom_store";
    import { HttpClient, HttpClientModule } from '@angular/common/http';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.store = new CustomStore({
                // ...
                insert: (values) => {
                    return httpClient.post("http://mydomain.com/MyDataService/myEntity", values)
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
<!--typeFunctionParamName1-->values<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data item to be inserted.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Promise<any><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise that is resolved after the data item is inserted. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/typeFunctionReturnDescription-->