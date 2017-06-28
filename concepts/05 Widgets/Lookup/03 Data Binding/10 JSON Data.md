Load JSON data by assigning its URL to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#dataSource) option. 
    
    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: "https://jsonplaceholder.typicode.com/users",
            valueExpr: 'username',
            displayExpr: 'name'
        });
    });

Note that you can also use a JSONP callback parameter supported by [jQuery.ajax()](http://api.jquery.com/jQuery.ajax/).

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            // ...
        });
    });

Implement the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) if you need to process data after obtaining it. See the [Custom Sources](/Documentation/Guide/Widgets/Lookup/Data_Binding/Custom_Sources/) topic for more details.

#####See Also#####
- [Access the DataSource](/Documentation/Guide/Widgets/Lookup/Data_Binding/Access_the_DataSource/)
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics/jQuery/Light/)

[tags]Lookup, data binding, provide data, json, jsonp
