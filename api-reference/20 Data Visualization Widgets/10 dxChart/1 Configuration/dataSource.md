<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Sourse of data for chart<!--/d-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->array | DataSource | DataSource configuration | string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the origin of data for the widget.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.  
 <a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LocalDataSource/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

- URL       
 A URL to JSON data or to a service returning data in JSON format.  
 <a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AjaxRequest/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

- [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) or its [configuration object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.

[note]When using the **DataSource** object, turn the [pagination](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) off to prevent data from partitioning.

#####See Also#####
- **series** | [argumentField]({basewidgetpath}/Configuration/series/#argumentField)
- **series** | [valueField]({basewidgetpath}/Configuration/series/#valueField)
- [getDataSource()]({basewidgetpath}/Methods/#getDataSource)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer)
- [Data Layer - Data Source Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples)
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->