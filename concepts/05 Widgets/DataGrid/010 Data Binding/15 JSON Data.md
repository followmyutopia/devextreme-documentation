To bind the **DataGrid** to data in the JSON format, assign a URL leading to data to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) option.  

    <!--JavaScript-->$(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: "https://jsonplaceholder.typicode.com/posts"
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/AjaxRequest/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

Note that you can also use a JSONP callback parameter supported by [jQuery.ajax()](http://api.jquery.com/jQuery.ajax/).

    <!--JavaScript-->$(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?"
        });
    });

If you need to process data after obtaining it, implement the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/). For details, see the [Custom Sources](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/) topic.