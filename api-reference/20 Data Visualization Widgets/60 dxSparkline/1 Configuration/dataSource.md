<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Sourse of data for sparkline<!--/d-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->array | DataSource | DataSource configuration | string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a data source for the sparkline.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) or its [configuration object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.

After defining the **dataSource**, specify which field of data objects to use as a source for arguments and which one as a source for values using the [argumentField](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#argumentField) and [valueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#valueField) options.
<!--/fullDescription-->