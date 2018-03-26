===========================================================================
<!--type-->function(key)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom implementation of the [byKey(key)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#byKeykey) method.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        // ...
        byKey: function (key) {
            var d = new $.Deferred();
            $.get("http://mydomain.com/MyDataService?id=" + key)
                .done(function (dataItem) {
                    d.resolve(dataItem);
                });
            return d.promise();
        }
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import CustomStore from "devextreme/data/custom_store";
    import { Http, HttpModule } from '@angular/http';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor(@Inject(Http) http: Http) {
            this.store = new CustomStore({
                // ...
                byKey: (key) => {
                    return http.get("http://mydomain.com/MyDataService?id=" + key)
                        .toPromise()
                        .then(response => {
                            return {
                                data: response.json().data
                            };
                        });
                }
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            HttpModule 
        ],
        // ...
    })

---
<!--/fullDescription-->
<!--typeFunctionParamName1-->key<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object|String|Number<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A key value.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Promise<any><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise that is resolved after the data item is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/typeFunctionReturnDescription-->