<!--id-->LoadOptions.requireTotalCount<!--/id-->
===========================================================================
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Indicates whether the total count of data objects is needed.
<!--/shortDescription-->

<!--fullDescription-->
When this option is **true**, the store expects the result to contain the **totalCount** field, which is the total data object count in the resulting data set. This count should reflect the number of data items after filtering but disregard any [take](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#take) parameter used for the query.
<!--/fullDescription-->