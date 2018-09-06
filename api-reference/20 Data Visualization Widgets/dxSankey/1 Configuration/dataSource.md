===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->Array<any> | DataSource | DataSource_Options | String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the widget's data source.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following:

- **Array of objects**      
 A simple JavaScript array that contains objects with the following structure:

        { source: String, target: String, weight: Number }

- **URL**        
 The URL of a JSON file or service that returns JSON data.

- **[DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) or its [configuration object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)**      
 The **DataSource** is an object that provides an API for data processing. Refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) and [DataSource Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/) guides for more information.

    [note]Turn the **DataSource**'s [pagination](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) off to prevent data partitioning.

#####See Also#####
- [sourceField](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/#sourceField) | [targetField](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#targetField) | [weightField](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#weightField)
- [getDataSource()]({basewidgetpath}/Methods/#getDataSource)
<!--/fullDescription-->