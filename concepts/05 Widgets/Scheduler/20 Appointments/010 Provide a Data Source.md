As all DevExtreme widgets that deal with data, the **Scheduler** widget works with the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object from the [DevExtreme Data Library](/Documentation/ApiReference/Data_Layer/). The DataSource connects the widget with data provided by a web service or data stored locally. The DataSource is a stateful object that keeps sorting, grouping, filtering, and keeps data transformation options and applies them each time data is loaded. The DataSource's underlying data access logic is isolated in a [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores). Unlike the DataSource, a Store is a stateless object implementing a universal interface for reading and modifying data. You can use one of the ready-to-use Stores - the [ArrayStore](/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data) to work with in-memory data, [LocalStore](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Local_Data) to work with data from a local storage or [ODataStore](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData) to work with an OData service - as well as the [CustomStore](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources) to realize the Store interface and organize work with a custom service. No matter which Store you specify for the scheduler's data source object, all data modification operations will be performed using the unified Store interface.

Here is an example of the DataSource object that uses an ODataStore to operate with data provided by an OData service.

    <!--JavaScript-->var schedulerDataSource = new DevExpress.data.DataSource({
        store: {
            type: 'odata',
            url: 'http://url/to/the/source'
        },
        paginate: false
    });

The [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource) option takes on the DataSource object or its [configuration object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/).

    <!--JavaScript-->var schedulerOptions = {
        dataSource: schedulerDataSource
    }

To learn more about the DataSource object and Stores, refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) article.

####Custom Store Implementation Specifics####

When you have a custom web service with its own data accessing logic, use a [CustomStore](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources) to operate data. This type of store requires the implementation of a function for each data access operation. When implementing the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function, apply the widget's filter to the query result.

    <!--JavaScript-->var schdulerOptions = {
        dataSource: new DevExpress.data.DataSource({
            store: new DevExpress.data.CustomStore({
                load: function(options) {
                    var result = $.Deferred();
                    $.ajax({
                        url: "/...",
                        data: {
                            start: schedulerInstance.getStartViewDate().getTime(),
                            end: schedulerInstance.getEndViewDate().getTime(),
                            ownerid: schedulerInstance.option("resources")
                        }
                    }).done(function(response){
                        result.resolve(response);
                    });
                    return result.promise();
                },
                //...
            }),
            //...
        }),
        //...
    }

#####See Also#####
- [Get Widget Instance - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/)
- [Get Widget Instance - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/)
- [Get Widget Instance - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)

Note that the function passed to the **load** option should support the **Scheduler** field in addition to the standard field set of the argument object. This field holds an object containing the following fields.

- **startDate**  
 Specifies the start date of a range of appointments to be loaded.

- **endDate**  
 Specifies the end date of a range of appointments to be loaded.

- **resources**  
 Specifies resources used to filter the appointments to be loaded.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeschedulerschedulergooglecalendarintegration" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

