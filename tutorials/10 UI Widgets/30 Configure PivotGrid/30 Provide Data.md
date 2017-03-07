<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_2/Framework/PivotGridTutorial/Step3/pivotGrid.html" data-show-first="pivotGrid.html">

The core of the **PivotGrid** widget is data displayed in it. Pivot grid data is provided by a [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/). This object is a connection between the **PivotGrid** widget, and data provided by a web service or data stored locally. The PivotGridDataSource underlying data access logic is isolated in a [Store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/). For the sake of simplicity, in this tutorial, an **ArrayStore** will be used to provide access to a local array of objects.

Declare an array of objects in a separate .js file and add a reference to it in the .html file. Each object in this array contains information about an order. 

To use this array as a PivotGridDataSource Store, assign it to the [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) option of the PivotGridDataSource.

In **MVVM approach**, to use this array as a PivotGridDataSource's Store, add it to the view or application model and assign the added option to the [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) option of the PivotGridDataSource. 

Then, bind this data source to your pivot grid. For this purpose, assign either an instance of the PivotGridDataSource object or the PivotGridDataSource [configuration object](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/) to the pivot grid's [dataSource](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#dataSource) option. In this tutorial, the PivotGridDataSource object will be used for a single widget, so its configuration can be assigned directly to the **dataSource** option and the PivotGridDataSource object will be created internally.


Run the resulting code and the [pivot grid fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) will be generated automatically according to the objects in the array, and be available in the **Field Chooser**. The Field Chooser is a complementary widget integrated in the pivot grid that allows you to manage data displayed in the pivot grid. To invoke the Field Chooser, right-click the row or column header and choose the "Show Field Chooser" option.

To display data in the pivot grid, drag and drop fields from the "All Fields" list to the "Row Fields", "Column Fields" and "Data Fields" areas. **Row** and **Column** areas are linked with the corresponding headers. If you put more than one field into an area, they will form a hierarchy. The **Data** area contains the measured parameters. Each pivot grid cell contains the data field values summarized in the conditions defined by the corresponding row and column header item.

Although the fields are available, they have a default configuration and cannot be used for analysis. Follow the next steps to learn how to configure "dimensions" (row, column and filter fields) and "measures" (data fields).

[note] To learn how to use the [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/) store type, refer to the [Use OLAP Data for the PivotGrid](/Documentation/Tutorial/UI_Widgets/Use_OLAP_Data_for_PivotGrid/#Provide_Data) tutorial.
</article>