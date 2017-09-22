Paging is used to load data in portions, which improves the widget's performance on large datasets. It is configured in the widget's [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). Enable paging by setting the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) option to **true**, and specify the number of items per page using the [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) option.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.DataSource({
                loadMode: "raw",   
                load: function () {
                    return $.getJSON('https://mydomain.com/MyDataService');
                },
                paginate: true,
                pageSize: 5
            }),
            valueExpr: "Product_ID",
            displayExpr: "Product_Name"
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule } from '@angular/http';
    import { DxSelectBoxModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import 'devextreme/data/custom_store';
    // ...
    export class AppComponent {
        selectBoxData: any = {};
        constructor(@Inject(Http) http: Http) {
            this.selectBoxData = new DataSource({
                loadMode: "raw",
                load: function () {
                    return http.get("https://mydomain.com/MyDataService");
                },
                paginate: true,
                pageSize: 5
            });
        }
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule,
             HttpModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData"
        valueExpr="Product_ID"
        displayExpr="Product_Name">
    </dx-select-box>

---

#####See Also#####
- [Data Binding - Custom Sources](/Documentation/Guide/Widgets/SelectBox/Data_Binding/Custom_Sources/)
- [SelectBox Demos](/Demos/WidgetsGallery/Demo/SelectBox/Overview/jQuery/Light/)

[tags]selectbox, select box, paginate, page size, pageSize