===========================================================================
<!--default-->null<!--/default-->
<!--type-->String | Array<Object> | DataSource | DataSource_Options<!--/type-->
===========================================================================

<!--shortDescription-->
A data source used to fetch data to be displayed by the widget.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) or its [configuration object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.
<!--/fullDescription-->