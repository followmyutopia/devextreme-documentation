===================================================================
===================================================================

<!--shortDescription-->
Sets the [searchOperation](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchOperation) option's value.
<!--/shortDescription-->

<!--paramName1-->op<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
A new value. Can be one of the following: **"="**, **"<>"**, **">"**, **">="**, **"<"**, **"<="**, **"startswith"**, **"endswith"**, **"contains"** and **"notcontains"**.
<!--/paramDescription1-->

<!--fullDescription-->

    <!--JavaScript-->
    dataSource.searchExpr("firstName");
    dataSource.searchOperation("contains");
    dataSource.searchValue("Jo");

#####See Also#####
- [Data Layer - Search API](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api)
<!--/fullDescription-->