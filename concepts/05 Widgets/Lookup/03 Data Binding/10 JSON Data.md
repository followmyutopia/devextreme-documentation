Load JSON data by assigning its URL to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#dataSource) option. 

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: "https://jsonplaceholder.typicode.com/users",
            valueExpr: 'username',
            displayExpr: 'name'
        });
    });

#####Angular

    <!--HTML-->
    <dx-lookup
        dataSource="https://jsonplaceholder.typicode.com/users"
        valueExpr="username"
        displayExpr="name">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

---

Note that you can also use a JSONP callback parameter supported by <a href="http://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            // ...
        });
    });

#####Angular

    <!--HTML-->
    <dx-lookup ...
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

---

Implement the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) if you need to process data after obtaining it. See the [Custom Sources](/Documentation/Guide/Widgets/Lookup/Data_Binding/Custom_Sources/) topic for more details.

#####See Also#####
- [Access the DataSource](/Documentation/Guide/Widgets/Lookup/Data_Binding/Access_the_DataSource/)
- [Lookup Demos](/Demos/WidgetsGallery/Demo/Lookup/Basics/jQuery/Light/)

[tags]Lookup, data binding, provide data, json, jsonp
