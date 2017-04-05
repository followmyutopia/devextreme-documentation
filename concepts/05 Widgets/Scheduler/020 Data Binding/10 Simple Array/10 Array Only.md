To bind the **Scheduler** to an array, pass this array to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource) option.

    <!--JavaScript-->
    var appointments = [
        { 
            text: 'Meet with a customer', 
            startDate: new Date(2016, 4, 10, 11, 0), 
            endDate: new Date(2016, 4, 10, 13, 0) 
        }, { 
            text: 'Discuss results', 
            startDate: new Date(2016, 5, 11, 12, 0), 
            endDate: new Date(2016, 4, 11, 13, 0) 
        },
        // ...
    ];

    $(function(){
        $("#schedulerContainer").dxScheduler({
            dataSource: appointments
        });
    });

If objects in the array need to be processed (for example, filtered), you can create a [Query](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept). In the following code, a Query selects objects with `text` containing *'meet'*.

    <!--JavaScript-->
    var appointments = [
        { 
            text: 'Meet with a customer', 
            startDate: new Date(2016, 4, 10, 11, 0), 
            endDate: new Date(2016, 4, 10, 13, 0) 
        },
        // ...
    ];

    $(function(){
        $("#schedulerContainer").dxScheduler({
            dataSource: DevExpress.data.query(appointments)
                            .filter("text", "contains", "meet")
                            .toArray()
        });
    });


#####See Also#####
- [Data Layer - Query Concept](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept)
- [Data Binding - ArrayStore](/Documentation/Guide/Widgets/Scheduler/Data_Binding/Simple_Array/ArrayStore/)
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, data binding, provide data, array, process data, query