Use the third-party [devextreme-query-mongodb](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md) extension to query data from MongoDB. This extension implements data processing on a server according to the protocol the **List** uses. To access the server from the client, configure the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) as described in the [Custom Sources](/Documentation/Guide/Widgets/List/Data_Binding/Custom_Sources/) article or use the [createStore](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) method. This method is a part of the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) extension. The following code shows how to use this method.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var serviceUrl = "http://url/to/my/service";
        $("#listContainer").dxList({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl,
                deleteUrl: serviceUrl
            }),
            // ...
        })
    });

#####Angular

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import { createStore } from "devextreme-aspnet-data-nojquery";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor() {
            let serviceUrl = "http://url/to/my/service";
            this.store = createStore({
                key: "ID",
                loadUrl: serviceUrl,
                deleteUrl: serviceUrl
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list ...
        [dataSource]="store">
    </dx-list>

---

See [this series of blog posts](https://community.devexpress.com/blogs/oliver/archive/2017/03/24/devextreme-real-world-patterns.aspx) for more information on using DevExtreme widgets in applications with MongoDB.