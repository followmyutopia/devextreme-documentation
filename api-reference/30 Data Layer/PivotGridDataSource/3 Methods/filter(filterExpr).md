===================================================================
===================================================================

<!--shortDescription-->
Applies a new [filter expression](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#filter). Cannot be used for the [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/) store type.
<!--/shortDescription-->

<!--paramName1-->filterExpr<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
A filter expression.
<!--/paramDescription1-->

<!--fullDescription-->
To apply a new filtering expression, call the [reload()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#reload) method. The usage example is shown below.

    <!--JavaScript-->pivotGridDataSource.filter("price", "<", 100);
    pivotGridDataSource.reload()

For information on filter expressions, refer to the [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) section of the Data Layer article.
<!--/fullDescription-->