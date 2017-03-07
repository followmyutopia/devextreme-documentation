<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Sets the current search operation.
<!--/shortDescription-->

<!--paramName1-->op<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
A search operation expression.
<!--/paramDescription1-->

<!--fullDescription-->
The available search operations are: **"="**, **"<>"**, **">"**, **">="**, **"<"**, **"<="**, **"startswith"**, **"endswith"**, **"contains"** and **"notcontains"**.

    <!--JavaScript-->
    dataSource.searchExpr("firstName");
    dataSource.searchOperation("contains");
    dataSource.searchValue("Jo");

For more information on searching, refer to the [Search Api section](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api) of the Data Layer article.
<!--/fullDescription-->