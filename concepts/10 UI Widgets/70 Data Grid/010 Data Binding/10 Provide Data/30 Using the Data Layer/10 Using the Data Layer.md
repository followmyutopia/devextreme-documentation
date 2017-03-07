DevExtreme is supplied with a set of components called "data layer" that helps you read and write data. A comprehensive overview of data layer features is provided in the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) topic. There are two main concepts upon which the data layer is built: DataSource and Store.

The DataSource is a stateful object that keeps sorting, grouping, filtering and data transformation options, and applies them each time data is loaded. It also provides events intended to handle data and state changes. More information on the DataSource object can be found in the [Reference](/Documentation/ApiReference/Data_Layer/DataSource/) section.

Store is a universal data access interface supporting a number of methods for reading and editing data. You can find the list of these methods in the [What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) topic. There are four types of stores.

* [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/) - provides access to an in-memory array
* [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/) - provides access to the HTML5 web storage
* [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) - provides access to a remote OData service
* [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) - allows you to implement your own data access logic

**DataGrid** accepts a DataSource instance or a DataSource configuration object. The instance or the object must have the **store** field specified (except for a [CustomStore](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Provide_Data/Using_the_Data_Layer/Using_a_CustomStore), where all store settings are specified directly in the object). This field can be set to an object configuring a store of any type listed above. The following subtopics describe each Store type in more detail and provide information about usage peculiarities.