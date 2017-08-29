<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--acceptValues-->'array' | 'local' | 'odata'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of the store used to access data.
<!--/shortDescription-->

<!--fullDescription-->
The option can take on one of the following values.

- "array"  
 Creates an [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/).

- "local"  
 Creates a [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/).

- "odata"  
 Creates an [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).

- "breeze"  
 Creates a **BreezeStore**. This value requires the [Breeze extension](https://github.com/DevExpress/PhoneJS-DataLayerExtensions/tree/master/breeze).

- "jaydata"  
 Creates a **JayDataStore**. This value requires the [JayData extension](https://github.com/DevExpress/PhoneJS-DataLayerExtensions/tree/master/jayData).

- "parse"  
 Creates a **ParseStore**. This value requires the [Parse extension](https://github.com/DevExpress/DevExtreme-Data-Parse).

Each store has its own set of options. They are detailed on the links in the list above. Note that these options should be set in the **DataSource**.**store** object.
<!--/fullDescription-->