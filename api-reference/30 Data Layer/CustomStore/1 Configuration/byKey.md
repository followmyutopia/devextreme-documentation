---
id: CustomStore.Options.byKey
type: function(key)
---
---
##### shortDescription
Specifies a custom implementation of the [byKey(key)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#byKeykey) method.

##### param(key): Object | String | Number
A key value.

##### return: Promise<any>
A Promise that is resolved after the data item is loaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---
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
                byKey: (key) => {
                    return httpClient.get("http://mydomain.com/MyDataService?id=" + key)
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