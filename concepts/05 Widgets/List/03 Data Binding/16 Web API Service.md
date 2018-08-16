DevExtreme provides the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) extension to access an ASP.NET Web API service. This extension consists of two parts: the server-side part implements data processing on the server according to the protocol the **List** uses; the client-side part creates and configures a [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) to access the server from the client. The following code shows how to use the extension's client-side [createStore](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) method.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var serviceUrl = "http://url/to/my/service";
        $("#listContainer").dxList({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl + "/GetAction",
                deleteUrl: serviceUrl + "/DeleteAction"
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
                loadUrl: serviceUrl + "/GetAction",
                deleteUrl: serviceUrl + "/DeleteAction"
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

#include common-demobutton with { 
    url: "/Demos/WidgetsGallery/Demo/List/WebApi/Mvc/Light/" 
}