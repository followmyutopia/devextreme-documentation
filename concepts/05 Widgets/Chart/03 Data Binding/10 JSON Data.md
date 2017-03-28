To bind the **Chart** to data in a JSON format, assign the URL referring to data to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxChart/Configuration/#dataSource) option.  
    
    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            dataSource: "http://www.example.com/dataservices/data.json",
            series: {
                // ...
            }
        });
    });

Note that you can also use a JSONP callback parameter supported by [jQuery.ajax()](http://api.jquery.com/jQuery.ajax/).

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            series: {
                // ...
            }
        });
    });

If you need to process data after obtaining it, implement the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/). For details, see the [Custom Sources](/Documentation/Guide/Widgets/Chart/Data_Binding/Custom_Sources/) topic.

<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

#####See Also#####
- [Bind Series to Data](/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/)
- [Update Data in the Chart](/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/)
- [Chart API Reference](/Documentation/ApiReference/UI_Widgets/dxChart/)

[tags]chart, data binding, provide data, json, jsonp
