===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->Array<any> | DataSource | DataSource_Options | String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the widget's data source.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following:

- Array         
 A JavaScript array that contains plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) or its [configuration object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)      
 The **DataSource** is an object that provides an API for data processing. The **DataSource**'s underlying data access logic is isolated in a store. Refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) and [DataSource Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/) guides for more information about the **DataSource**.

Each data item represents a connection between two nodes and has the same structure as the **Link**.[connection](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Link/Fields/connection/) field: 

    { source: String, target: String, weight: Number }

<!--/fullDescription-->