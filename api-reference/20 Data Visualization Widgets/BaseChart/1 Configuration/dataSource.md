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
 A simple JavaScript array containing a collection of plain objects.

- **URL**       
 A URL to JSON data or a service returning data in JSON format.

- **[DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) or its [configuration object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)**      
 A **DataSource** is an object that provides an API for data processing. Learn more about it from the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer) and [DataSource Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples) guides.

    [note]Turn the **DataSource**'s [pagination](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) off to prevent data from partitioning.

<a href="/Demos/WidgetsGallery/Demo/Charts/SimpleArray/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;width:95px" target="_blank">Array Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Charts/AjaxRequest/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;width:95px" target="_blank">JSON Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;width:95px" target="_blank">DataSource Demo</a>

#####See Also#####
- [argumentField]({basewidgetpath}/Configuration/series/#argumentField) | [valueField]({basewidgetpath}/Configuration/series/#valueField)
- [getDataSource()]({basewidgetpath}/Methods/#getDataSource)
<!--/fullDescription-->