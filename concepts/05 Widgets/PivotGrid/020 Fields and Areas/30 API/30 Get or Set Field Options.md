Use the [field(id)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid) method to get options of a specific field. The **id** parameter accepts one of the following values:

- the index of a field in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array;
- the [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField) value of a field;
- the [caption](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption) of a field.

To set one or more field parameters, use the [field(id, options)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid_options) method. The **id** parameter format is similar to the one described above and the **options** parameter is an option/value pairs object. The options available are described in the [fields configuration](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) reference section.

[note] After making changes in the **fields** array, you should apply them by calling the [load()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#load) method of the [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/).