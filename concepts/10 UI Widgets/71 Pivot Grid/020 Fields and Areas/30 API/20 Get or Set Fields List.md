
You can either [get all fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fields) from the data source or [get fields that belong to a specific area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#getAreaFieldsarea_collectGroups). The array returned by these functions has the following structure.

    <!--JavaScript-->[	
		{  
			"area":/*...*/,
			"dataField":/*...*/,
			"groupInterval":/*...*/,
			"dataType":/*...*/,
			"displayFolder":/*...*/,
			"index":/* the index in the fields array */,
			"caption":/*...*/,
			"allowSorting":/*...*/,
			"allowSortingBySummary":/*...*/,
			"allowFiltering":/*...*/,
			"allowExpandAll":/*...*/,
			"areaIndex":/*...*/,
			//...
		},
    //...
	]

Virtually all options available in this object are the same as in the [fields configuration](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) reference section, except for the **index** field. This is a unique field index in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array that can be used to identify this field (for example, when calling the [field(id)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid) method).

To get fields of a particular area, use the [getAreaFields(area, collectGroups)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#getAreaFieldsarea_collectGroups) method. The structure of the elements in the array returned by this method is similar to the one presented above. If the **collectGroups** parameter is set to *true*, this method will return groups as separate items without going into their structure. 

<!-- link to Fields Grouping -->

To define an entire [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) list at runtime, use the [fields(fields)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldsfields) API method. The options available for each field are described in the [fields configuration](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) reference section.

[note] After making changes in **fields** array, apply them by calling the [load()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#load) method of the [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/).