===========================================================================
<!--type-->String | Array<String><!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the key property or properties.
<!--/shortDescription-->

<!--fullDescription-->
The key configuration option is required if you create a Store for read-write data access. An appropriate [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) specifies the key property. If you need to specify a compound key property, assign an array of getters to this option.

The following example demonstrates how to set **id** and **code** key properties:

    <!--JavaScript-->
    var storeConfig = {
        key: ["id", "code"]
    }
<!--/fullDescription-->
