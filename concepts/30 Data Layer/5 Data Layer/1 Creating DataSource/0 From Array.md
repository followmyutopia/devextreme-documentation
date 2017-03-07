Pass the required array to the DataSource constructor.

    <!--JavaScript-->var dataSource = new DevExpress.data.DataSource(array);

If you need to specify other DataSource [configuration options](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/), use another form.

    <!--JavaScript-->var dataSource = new DevExpress.data.DataSource({
        // array of data
        store: array,

        // additional configuration options
        sort: "name",
        pageSize: 10
    });

In this case, the array is passed to the [store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#store) option of the configuration object.
