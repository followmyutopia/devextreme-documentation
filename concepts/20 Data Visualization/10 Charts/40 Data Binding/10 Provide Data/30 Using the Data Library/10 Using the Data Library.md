DevExtreme integrates a data library, which allows you to read and write data.  A comprehensive overview of data library features is provided in the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) topic. This data library is comprised of a DataSource and a Store.

A DataSource is a stateful object that keeps sorting, grouping, filtering and data transformation options, and applies them each time data is loaded. It also provides events intended to handle data and state changes. More information on the DataSource object can be found in the [Reference](/Documentation/ApiReference/Data_Layer/DataSource/) section.

A Store is a universal data access interface that is comprised of a number of methods for reading and editing data. You can find a listing of these methods in the [What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) topic. There are four types of stores.

* [ArrayStore](/Documentation/Guide/Data_Visualization/Charts/Data_Binding/#Provide_Data/Using_the_Data_Library/Using_an_ArrayStore) - provides access to an in-memory array
* [LocalStore](/Documentation/Guide/Data_Visualization/Charts/Data_Binding/#Provide_Data/Using_the_Data_Library/Using_a_LocalStore) - provides access to the HTML5 web storage
* [ODataStore](/Documentation/Guide/Data_Visualization/Charts/Data_Binding/#Provide_Data/Using_the_Data_Library/Using_an_ODataStore) - provides access to a remote OData service
* [CustomStore](/Documentation/Guide/Data_Visualization/Charts/Data_Binding/#Provide_Data/Using_the_Data_Library/Using_a_CustomStore) - allows you to implement your own data access logic

**Chart**, **PieChart** and **Sparkline** accept a DataSource instance that must have its **store** field specified. You must assign an object configuring the required store to this field. This rule, however, can be ignored if you use a [CustomStore](/Documentation/Guide/Data_Visualization/Charts/Data_Binding/#Provide_Data/Using_the_Data_Library/Using_a_CustomStore). In this case, specify all store settings directly in the instance object, omitting the use of the **store** field.

In the following subtopics, you will learn how to configure stores of different types.
