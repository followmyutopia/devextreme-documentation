<!--id-->LoadOptions.groupSummary<!--/id-->
===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
A group summary expression. Used with the [group](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#group) setting. 
<!--/shortDescription-->

<!--fullDescription-->
Contains group summary definitions with the following structure, where **summaryType** can be *"sum"*, *"avg"*, *"min"*, *"max"* or *"count"*:

    { selector: "field", summaryType: "sum" }

When this option is specified, each data object should have a **summary** array that contains the resulting values in the same order as the summary definitions.
<!--/fullDescription-->