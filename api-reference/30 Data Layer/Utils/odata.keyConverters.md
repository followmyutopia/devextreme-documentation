<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module-->data/odata/utils<!--/module-->
<!--export-->keyConverters<!--/export-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Holds key value converters for [OData](http://www.odata.org).
<!--/shortDescription-->

<!--fullDescription-->
Use this object to register your own key type in addition to built-in types (String, Int32, Int64 and [Guid](/Documentation/ApiReference/Data_Layer/Guid/)).

    <!--JavaScript-->
    DevExpress.data.utils.odata.keyConverters["MyType"] = function(value) {
        return value + "MT"; //returns an URL component for 'value'
    };

The type converter is a function that takes on a value and returns a URL component for this value. For instance, the Int64 type converter takes on an integer value and returns a string representation of the initial value followed by "L" (555555 -> "555555L").

For more information on OData key types, refer to the [Data Source Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Data_Source_Examples_OData_Key_Types) article.
<!--/fullDescription-->