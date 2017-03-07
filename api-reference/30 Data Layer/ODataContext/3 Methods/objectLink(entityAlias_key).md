<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Return a special proxy object to describe the entity link.
<!--/shortDescription-->

<!--paramName1-->entityAlias<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The type name.
<!--/paramDescription1-->

<!--paramName2-->key<!--/paramName2-->
<!--paramType2-->object|string|number<!--/paramType2-->
<!--paramDescription2-->
The target entity key value.
<!--/paramDescription2-->

<!--returnType-->object<!--/returnType-->
<!--returnDescription-->
The desired proxy object.
<!--/returnDescription-->

<!--fullDescription-->
This method is used within the [insert()](/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#insertvalues) and [update()](/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#updatekey_values) method calls.

The following example demonstrates how to change the Category property of the Product entity with the key **1** to the Category with the key **2**.

    <!--JavaScript-->
    context.Products.update(1, {
        Category: context.objectLink("Categories", 2)
    });

For more information on linking entities, refer to the [Associations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Data_Source_Examples_OData_Associations) section of the Data Source Examples article.
<!--/fullDescription-->