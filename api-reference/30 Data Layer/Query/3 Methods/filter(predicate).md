===================================================================
===================================================================

<!--shortDescription-->
Filters the current [Query](/Documentation/ApiReference/Data_Layer/Query/) data.
<!--/shortDescription-->

<!--paramName1-->predicate<!--/paramName1-->
<!--paramType1-->function<!--/paramType1-->
<!--paramDescription1-->
A function that returns a Boolean value indicating whether or not an item is included in the resulting array.
<!--/paramDescription1-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
The Query object.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to get an array of the Query items whose **price** value is lower than 500.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray).filter(function(item){
        if(item.price < 500)
            return true;
        return false;
    }).toArray();

For information on filtering, refer to the [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) section of the Data Layer article.
<!--/fullDescription-->