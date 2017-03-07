For working with HTML5 Web Storage (known as **window.localStorage**), the data layer provides the [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/). It functions exactly as the ArrayStore described in the [previous section](/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data), and also ensures that the data is persisted in the browser's localStorage, immediately or at regular intervals.

To create this kind of a DataSource, use the following code.

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: {
            type: "local",
            name: "MyLocalData",
            key: "id"
        }
    });
    
The [name](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#name) configuration option is required to scope the data and distinguish it from other localStorage contents. There are two LocalStore options controlling how often the underlying array is persisted: [flushInterval](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#flushInterval) and [immediate](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#immediate).
