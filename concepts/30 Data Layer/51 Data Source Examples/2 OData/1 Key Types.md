When specifying [keys](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key) in the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) configuration, and in the [entities](/Documentation/ApiReference/Data_Layer/ODataContext/Configuration/#entities) options for the [ODataContext](/Documentation/ApiReference/Data_Layer/ODataContext/Configuration/), specify the appropriate [key types](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#keyType) as well. The following key types are supported out of the box: **String**, **Int32**, **Int64**, and [Guid](/Documentation/ApiReference/Data_Layer/Guid/).

In most cases, the key expression is a single property.

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "/url/to/service",
        key: "CategoryID",
        keyType: "Int32"
    });
    
For compound keys consisting of multiple properties, the following syntax is used.

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "/url/to/service",
        key: [ "OrderID", "ProductID" ],
        keyType: {
            OrderID: "Int32",
            ProductID: "Int32"
        } 
    });

If you need to use a key type that is not supported by default, use the [odata.keyConverters](/Documentation/ApiReference/Data_Layer/Utils/#odatakeyConverters) utility object to register your own key type.

    <!--JavaScript-->
    DevExpress.data.utils.odata.keyConverters["MyType"] = function(value) { 
        return value + "MT"; //returns an URL component for 'value'
    };