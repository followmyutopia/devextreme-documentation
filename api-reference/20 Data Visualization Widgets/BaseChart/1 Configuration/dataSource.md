===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->Array<any> | DataSource | DataSource_Options | String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the widget's data origin.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following:

- **Array of objects**      
 A simple JavaScript array containing a collection of plain objects. See [demo](/Demos/WidgetsGallery/Demo/Charts/SimpleArray/jQuery/Light/).

- **URL**       
 A URL to JSON data or a service returning data in JSON format. See [demo](/Demos/WidgetsGallery/Demo/Charts/AjaxRequest/jQuery/Light/).

- **[DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) or its [configuration object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)**      
 A **DataSource** is an object that provides an API for data processing. Learn more about it from the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer) and [DataSource Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples) guides. See [demo](/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/jQuery/Light/).

    [note]Turn the **DataSource**'s [pagination](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) off to prevent data from partitioning.

#include widgets-ref-datasource-fieldname-note

#####See Also#####
- [argumentField]({basewidgetpath}/Configuration/series/#argumentField) | [valueField]({basewidgetpath}/Configuration/series/#valueField)
- [getDataSource()]({basewidgetpath}/Methods/#getDataSource)
<!--/fullDescription-->