<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the serialization format for date-time values.
<!--/shortDescription-->

<!--fullDescription-->
If you do _not_ set the [dataSource]({basewidgetpath}/Configuration/#dataSource) option at design time, the widget cannot detect the format of date-time values automatically. In this case, specify the **dateSerializationFormat** option. You can also do this to serialize date-time values to a specific format.

The following formats are supported.

- `"yyyy-MM-dd"` - a local date  

- `"yyyy-MM-ddTHH:mm:ss"` - a local date and time  

- `"yyyy-MM-ddTHH:mm:ssZ"` - a UTC date and time  

- `"yyyy-MM-ddTHH:mm:ssx"` - a date and time with a timezone

Note that this option applies only if the **forceIsoDateParsing** field of the [global configuration object](/Documentation/ApiReference/Common/utils/#configconfig) is set to *true*.
<!--/fullDescription-->