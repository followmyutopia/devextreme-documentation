<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_1/Framework/UseOLAPDataForPivotGrid/Step5/pivotGrid.html" data-show-first="pivotGrid.html">
A **Measure** is a field that provides data for calculating summary values. Such fields can be placed to the **data** area only.

The minimal configuration of a measure includes the following options.

* [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField)			
	The path to a measure where nodes should be enclosed to brackets and delimited by a period (for example, "[Measures].[Order Count]").

* [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area)				
	Type of the area where the field should be placed to. Measures are placed to the 'data' area.

There are some additional options. The most common of them are shown below.

* [caption](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption)			
	A caption that will be used to identify the field.

* [format](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#format)			
	Specifies a display format for the field values. Can be 'fixedPoint', 'percent', 'decimal', etc. 

[note] The full list of options is available in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array description.

In this tutorial, two measures are defined: 'Order Count' and 'Internet Order Count'.

Run the resulting code and you will see the pivot grid filled with data.
</article>