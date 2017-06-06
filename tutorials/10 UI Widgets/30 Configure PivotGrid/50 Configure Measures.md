<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_2/Framework/PivotGridTutorial/Step5/pivotGrid.html" data-show-first="pivotGrid.html">
A **Measure** is a field that provides data for calculating summary values. Such fields can be placed in the **data** area only.

The minimal configuration of a measure includes the following options.

* [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField)			
	The name of the data source field containing data for the pivot grid field.

* [dataType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataType)			
	А type of the field values. Measures are often of the 'number' type.

* [summaryType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType)				
	A method for aggregating field data. Can be 'sum', 'min', 'max', 'avg', 'count' or 'custom'.

There are some additional options. The most common of them are shown below.

* [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area)				
	Type of the area where the field should be placed to. If this option is not set, the field will be available in the [Field Chooser](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldChooser/) only. Measures are placed to the 'data' area.

* [caption](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption)			
	A caption that will be displayed in the pivot grid's field chooser to identify the field.

* [displayFolder](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#displayFolder)			
	The name of the folder in the "All Fields" section of the Field Chooser. Measures are often located in a separate folder called 'Measures'.

* [format](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#format)				
	Specifies a display format for the field values. Can be 'fixedPoint', 'percent', 'decimal', etc.

[note] The full list of options is available in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array description.

In this tutorial, two measures are defined: 'Average Freight' and 'Count'. Note that if the **summaryType** is 'count', you are not required to define the **dataField** because any field can be used for counting with an identical result.

Run the resulting code and you will see the pivot grid filled with data.
</article>