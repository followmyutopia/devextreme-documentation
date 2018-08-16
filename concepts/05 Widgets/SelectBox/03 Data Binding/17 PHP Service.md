DevExtreme provides the [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md) extension that implements data processing on a PHP server according to the protocol the **SelectBox** uses. To access the server from the client, configure the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) as described in the [Custom Sources](/Documentation/Guide/Widgets/SelectBox/Data_Binding/Custom_Sources/) article or use the [createStore](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) method. This method is a part of the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) extension. The following code shows how to use this method.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var serviceUrl = "http://url/to/my/service.php";
        $("#selectBoxContainer").dxSelectBox({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl,
                insertUrl: serviceUrl
            }),
            // ...
        })
    });

#####Angular

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import { createStore } from "devextreme-aspnet-data-nojquery";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor() {
            let serviceUrl = "http://url/to/my/service.php";
            this.store = createStore({
                key: "ID",
                loadUrl: serviceUrl,
                insertUrl: serviceUrl
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSelectBoxModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-select-box ...
        [dataSource]="store">
    </dx-select-box>

---
