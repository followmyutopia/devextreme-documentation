<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_1/Framework/UseOLAPDataForPivotGrid/Step4/pivotGrid.html" data-show-first="pivotGrid.html">
**Dimensional fields** are used to form conditions for calculating summary values displayed in the pivot grid cells. Such fields can be placed to the **row**, **column** or **filter** areas only. For example, you can place the 'Date' dimension to the **column** area and the 'Product' dimension to the **row** area to see the dynamics of a parameter related to different products in different periods of time (sales, for example).

**Dimension** consists of one or more **fields** (attributes in OLAP terminology). For example, the 'Date' dimension can consist of the 'Year', 'Half-year', 'Quarter', 'Month' and 'Date' fields. To configure fields, assign an array to the PivotGridDataSource's [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) option. The OLAP server can return pre-configured dimensions called **hierarchies**. They are marked by the 'hierarchy' icon (![](/Content/images/doc/16_1/DataGrid/hierarchyIcon.png)) in the field chooser. In this example, the 'Date' dimension is configured using the pre-defined OLAP hierarchy and the 'Product' dimension is assembled manually.

The minimal configuration of a dimensional field acquired from the OLAP server consists of the following options.

* [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField)			
	The path to a field or hierarchy where nodes should be enclosed to brackets and delimited by a period (for example, "[Product].[Category]").

* [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area)				
	The type of the area where the field should be placed to.

* [caption](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption) (optional)			
	The caption that will used to identify the field.

[note] The full list of options is available in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array description.

Run the resulting code and you will see the row and column headers filled with data. Follow the next step to define the data fields and get the summary values calculated in the conditions defined by the header items.
</article>