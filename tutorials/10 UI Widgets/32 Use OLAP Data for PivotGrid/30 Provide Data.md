<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_2/Framework/UseOLAPDataForPivotGrid/Step3/pivotGrid.html" data-show-first="pivotGrid.html">

Pivot grid data is provided by a [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/). This object is a connection between the **PivotGrid** widget, and data provided by a web service or data stored locally. The PivotGridDataSource underlying data access logic is isolated in a [Store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/). In this tutorial, an **XmlaStore** will be used to provide access to a remote OLAP server. 

First, configure the **PivotGridDataSource** | [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) object:

- assign the 'xmla' value to the [type](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/#type) field;
- assign the HTTP address of your OLAP server to the [url](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#url) field;
- assign the name of the database to the [catalog](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#catalog) field;
- assign the name of the cube to display to the [cube](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#cube) field.

Then, bind this data source to your pivot grid. For this purpose, assign either an instance of the PivotGridDataSource object or PivotGridDataSource's [configuration object](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/) to the pivot grid's [dataSource](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#dataSource) option. In this tutorial, the PivotGridDataSource object will be used by a single widget. Thus, its configuration object can be assigned directly to the **dataSource** option. In this case, the PivotGridDataSource instance will be created internally.

Run the resulting code and the [pivot grid fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) will be generated automatically according to the data returned by the OLAP server, and be available in the **Field Chooser**. The Field Chooser is a complementary widget integrated in the pivot grid that allows you to manage the displayed data. To invoke the Field Chooser, right-click the row or column header, and choose the "Show Field Chooser" option.

To display data in the pivot grid, drag and drop fields from the "All Fields" list to the "Row Fields", "Column Fields" and "Data Fields" lists. **Row** and **Column** areas are linked with the corresponding headers. If you put more than one field into an area, they will form a hierarchy. The **Data** area contains the measured parameters. Each pivot grid cell contains the data field values summarized according to the conditions defined by the corresponding row and column header item.

Although the fields are available, the pivot grid is empty by default. Follow the next steps to learn how to configure "dimensions" (row, column and filter fields) and "measures" (data fields) for populating the pivot grid automatically on load.

[note] To learn how to configure HTTP access to the Microsoft Analysis Services, refer to the **Data Binding** | [Using an OLAP](/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Provide_Data/Using_an_OLAP).
</article>