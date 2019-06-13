Load JSON data by assigning its URL to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#dataSource) option. 

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: "https://jsonplaceholder.typicode.com/users",
            valueExpr: 'username',
            displayExpr: 'name'
        });
    });

#####Angular

    <!--HTML-->
    <dx-select-box
        dataSource="https://jsonplaceholder.typicode.com/users"
        valueExpr="username"
        displayExpr="name">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

---

Note that you can also use a JSONP callback parameter supported by <a href="http://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            // ...
        });
    });

#####Angular

    <!--HTML-->
    <dx-select-box ...
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

---

Implement the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) if you need to process data after obtaining it. See the [Custom Sources](/Documentation/Guide/Widgets/SelectBox/Data_Binding/Custom_Sources/) topic for more details.

#####See Also#####
- [Access the DataSource](/Documentation/Guide/Widgets/SelectBox/Data_Binding/Access_the_DataSource/)
- [SelectBox Demos](/Demos/WidgetsGallery/Demo/Select_Box/Overview/jQuery/Light/)

[tags]selectBox, data binding, provide data, json, jsonp