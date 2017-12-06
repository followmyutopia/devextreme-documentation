===========================================================================
<!--type-->String | Array<String><!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the key properties within the data associated with the Store.
<!--/shortDescription-->

<!--fullDescription-->
The key configuration option is required if you create a Store for read-write data access. The key property is specified by an appropriate [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters). If you need to specify a compound key property, assign an array of getters to this option.

The following example demonstrates how to set **id** and **code** key properties.

    <!--JavaScript-->
    var storeConfig = {
        key: ["id", "code"]
    }
<!--/fullDescription-->