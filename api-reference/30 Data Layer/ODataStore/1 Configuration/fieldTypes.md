<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->{}<!--/default-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the types of data fields. Accepts the following types: *"String"*, *"Int32"*, *"Int64"*, *"Boolean"*, *"Single"*, "*Decimal"* and *"[Guid](/Documentation/ApiReference/Data_Layer/Guid/)"*.
<!--/shortDescription-->

<!--fullDescription-->
Set this option if you are going to [filter data](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering). An object assigned to it should list data fields and their types as field-value pairs. You can also use this option instead of [keyType](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#keyType) to specify the type of the key property.

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "/url/to/service",
        key: "ProductID",
        fieldTypes: {
            ProductID: "Guid",
            ProductName: "String",
            ProductPrice: "Int16"
        }
    });
<!--/fullDescription-->