﻿Pass a Store instance to the DataSource constructor.

    <!--JavaScript-->var store = new DevExpress.data.ArrayStore(data);
    var dataSource = new DevExpress.data.DataSource(store);

If you need to specify other DataSource [options](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/), use the following code.

    <!--JavaScript-->var store = new DevExpress.data.ArrayStore(array);
    var dataSource = new DevExpress.data.DataSource({
        sort: "name",
        pageSize: 10,
        store: store
    });

In this example, the Store instance is passed to the [store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#store) configuration option.

A Store can be specified implicitly. Two possibilities are described above ([From Array](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/From_Array) and [From Url](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_From_Url)). In addition, you can use the following.

- Add the properties implementing the required data access logic to the DataSource configuration object. In this case, the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) will be automatically created within the DataSource. The properties should correspond to the [CustomStore configuration options](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/).

        <!--JavaScript-->var dataSource = new DevExpress.data.DataSource({
            //DataSource configuration
            sort: "name",
            pageSize: 10,
            //data access logic
            load: function(loadOptions) {
                return array;
            },
            byKey: function(key) {
                return array[key];
            },
            ...
        });

- Pass a Store configuration object. Besides the required Store configuration options, this object should contain the **type** property that specifies which Store object will be created within the DataSource. 

        <!--JavaScript-->var dataSource = new DevExpress.data.DataSource(
            store: {
                type: "array",
                data: array
            }
        });

 The following Store types are available.

 - "array" - creates an [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/)
 - "local" - creates a [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/)
 - "odata" - creates an [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/)
