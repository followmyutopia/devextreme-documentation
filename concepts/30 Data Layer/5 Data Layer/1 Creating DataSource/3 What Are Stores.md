﻿Store is a universal data access interface accepted within the DevExtreme data layer. It includes the following methods required for reading and editing data.

- **load(options)** - Loads data. This function takes on an object specifying [sorting](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting), [grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping), [filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) and [data transformation](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation) options.
- **insert(values)** - Adds a new item with passed values.
- **remove(key)** - Removes the data item specified by the key.
- **update(key, values)** - Sets the new values to the data item specified by the key.
- **byKey(key, extraOptions)** - Loads the data item specified by the key. The **extraOptions** argument takes on additional implementation options for getting the required item.
- **totalCount(options)** - Enables you to get the total count of items that satisfy the specified conditions without loading them. The **options** object can contain **filter** and **group** fields that specify filtering and grouping options respectively.

DevExtreme includes the following Store implementations for the most common data access scenarios.

- [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/) - provides access to an in-memory array
- [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/) - provides access to HTML5 web storage
- [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) - provides access to a remote OData service
- [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) - a Store that enables you to implement your own data access logic

You can easily implement your own Stores. As a reference, we created several custom Store implementations to support well known data libraries: [BreezeJS](https://github.com/DevExpress/DevExtreme-14.2-DataLayerExtensions/tree/master/breeze), [JayData](https://github.com/DevExpress/DevExtreme-14.2-DataLayerExtensions/tree/master/jayData) and [Parse](https://github.com/DevExpress/DevExtreme-Data-Parse).
