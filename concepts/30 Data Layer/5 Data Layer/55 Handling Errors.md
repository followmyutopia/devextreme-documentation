DevExtreme provides the [errorHandler](/Documentation/ApiReference/Data_Layer/Utils/#errorHandler) utility property to help you handle errors that occur within the entire data layer. Assign the error handling function to this property. This function takes on the JavaScript **Error** object as a parameter.

    <!--JavaScript-->
    DevExpress.data.errorHandler = function(error) {
        console.log(error.message);
    };

A Store enables you to handle errors that occur only within itself. To handle Store errors, assign an error handling function to the **handleError** configuration option of the Store.

    <!--JavaScript-->
    var store = new DevExpress.data.LocalStore({
        name: "MyStore",
        errorHandler: function(error) {
            console.log(error.message);
        }
    };

DevExtreme also provides an ability to handle errors that occur during operation execution. All DevExtreme data transfer operations are asynchronous and return the [jQuery.Deferred](http://api.jquery.com/jQuery.Deferred) promise object allowing you to specify both success and error callbacks. To handle the operation error, pass the error handling function to the **fail()** method of the returned object.

The following example illustrates how to handle errors that occurred during the execution of the [load](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) operation of a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/).

    <!--JavaScript-->
    dataSource.load()
        .done(function(result) {
            // process result
        })
        .fail(function(error) {
            console.log(error.message);
        });