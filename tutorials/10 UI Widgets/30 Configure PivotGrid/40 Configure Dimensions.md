<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_1/Framework/PivotGridTutorial/Step4/pivotGrid.html" data-show-first="pivotGrid.html">
**Dimensional fields** are used to form conditions for calculating summary values displayed in the pivot grid cells. Such fields can be placed to the **row**, **column** or **filter** areas only. For example, you can place the 'Date' dimension to the **column** area and the 'Shipped To' dimension to the **row** area to see the dynamics of a certain parameter in different periods of time, as well as its shipping directions.

**Dimension** consists of one or more **fields** (attributes in OLAP terminology). For example, the 'Date' dimension can consist of the 'Year', 'Quarter' and 'Month' fields. To configure fields, assign an array to the PivotGridDataSource's [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) option. The minimal configuration of a dimensional field includes the following options.

* [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField)			
	The name of the data source field containing data for the pivot grid field.

* [dataType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataType)			
	The type of field values. Can be 'string', 'number' or 'date'.

There are several additional options. The most common of them are shown below.

* [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area)				
	The type of the area where the field should be placed to. If this option is not set, the field will be available in the [Field Chooser](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldChooser/) only. 

* [groupInterval](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#groupInterval)			
	If the **dataType** is 'date', you can specify how the values of the field should be combined into groups.

* [caption](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption)			
	The caption that will be displayed in the pivot grid's field chooser to identify the field.

* [displayFolder](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#displayFolder)			
	The name of the folder in the "All Fields" section of the Field Chooser. Folders are often used to group fields that belong to a single dimension.

[note] The full list of options is available in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array description.

Since you have defined the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array, the automatic field generation can be switched off by setting the [retrieveFields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#retrieveFields) option to *false*.

Run the resulting code, and you will see the row and column headers filled with the data. Follow the next step to define data fields and get the summary values calculated in the conditions defined by the header items.
</article>