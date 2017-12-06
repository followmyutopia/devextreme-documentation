===========================================================================
<!--default-->'processed'<!--/default-->
<!--acceptValues-->'processed' | 'raw'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how data returned by the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function is treated.
<!--/shortDescription-->

<!--fullDescription-->
Specify this option depending on the behavior you implemented for the **load** function. If this function sends data shaping options to the server and fetches processed data, then **loadMode** should be *"processed"*. If the **load** function simply fetches raw, unprocessed data from the server, set **loadMode** to *"raw"*. In this case, the raw data will be processed on the client automatically.

#####See Also#####
- [Load Data in Raw Mode](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode)
- [cacheRawData](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#cacheRawData)
<!--/fullDescription-->