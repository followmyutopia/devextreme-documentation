<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Represents a stateful pivot grid data source for a component or for standalone usage. Data access logic is defined by the underlying DataStore.<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_pivot_grid_data_source">ui/pivot_grid/data_source</a><!--/module-->
<!--type-->object<!--/type-->
<!--inherits-->..\..\10 UI Widgets\EventsMixin\EventsMixin.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
An object that provides access to data for the [PivotGrid](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/) widget.
<!--/shortDescription-->

<!--fullDescription-->
The PivotGridDataSource object is a connection between a [PivotGrid](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/) widget and the data provided by a web service or data stored locally. The DataSource underlying data access logic is isolated in a [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores). You can use the following Store types in the PivotGridDataSource.

* [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/)		
	Provides access to an in-memory array.

* [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/)		
	Provides access to a remote OLAP service.

* [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/)		
	Provides access to an HTML5 web storage.

* [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/)		
	Provides access to a remote OData service.

* [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/)		
	A Store that enables you to implement your own data access logic.

To create a PivotGridDataSource instance, call its constructor and pass the [configuration object](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/) to it.

    <!--JavaScript-->var myDataSource = new DevExpress.data.PivotGridDataSource(pivotGridDataSourceConfig);

The core field of the configuration object is [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/). If your Store type is [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/), no additional configuration is required, whereas if you use other Store types, you also need to describe your data for [PivotGrid](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/) by assigning the list of fields to the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array.

To associate a PivotGridDataSource instance with the widget, pass this instance to the dataSource option of the widget.

    <!--HTML--><div data-bind="dxPivotGrid: { dataSource: myDataSource }"></div>

You can also pass the PivotGridDataSource configuration object to the dataSource option. In this case, the PivotGridDataSource instance will be automatically created within the widget.

    <!--HTML--><div data-bind="dxPivotGrid: { dataSource: pivotGridDataSourceConfig }"></div>

[note] If you create a PivotGridDataSource instance outside the widget, be sure to [dispose](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#dispose) of it when it is no longer used. If the PivotGridDataSource is created within the widget, it will be disposed of automatically.

Refer to the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) and [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) topics for more information about working with data in DevExtreme.
<!--/fullDescription-->