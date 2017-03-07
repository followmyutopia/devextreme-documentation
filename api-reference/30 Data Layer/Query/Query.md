<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Represents a universal chainable data query interface. Feature support depends on implementation. Array and OData support everything (OData falls back to client evaluation for operations not supported on server).<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_data_query">data/query</a><!--/module-->
<!--type-->object<!--/type-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
An universal chainable data query interface object.
<!--/shortDescription-->

<!--fullDescription-->
To create a Query, call the [query(array)](/Documentation/ApiReference/Data_Layer/Utils/#queryarray) or [query(url, queryOptions)](/Documentation/ApiReference/Data_Layer/Utils/#queryurl_queryOptions) utility function, depending on the type of storage you access. The Query enables you to execute several methods in a single statement, as it supports method chaining.

    <!--JavaScript-->
    var processedArray = DevExpress.data.query(inputArray)
        .filter([ [ "value", ">=", 10 ], "and", [ "value", "<=", 90 ]])
        .sortBy("lastName")
        .thenBy("firstName")
        .select("lastName", "firstName", "value")
        .toArray();

For more information on the Query concept, refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept) article.
<!--/fullDescription-->