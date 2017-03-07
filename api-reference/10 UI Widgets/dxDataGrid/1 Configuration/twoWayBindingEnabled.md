<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Enabled two-way binding for angular/knockout approach<!--/d-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether to enable two-way data binding.
<!--/shortDescription-->

<!--fullDescription-->
Two-way data binding ensures that the UI tracks changes made in the data source by a 3rd-party instrument, and vice versa, the data source gets updated according to changes in the UI. Thus, the widget and its data source can continue to correspond to each other. 

[note] **DataGrid** provides this feature through Knockout and AngularJS resources, so make sure that you have [added these libraries](/Documentation/Guide/Data_Visualization/Basics/Installation/) to your app.

In certain scenarios, you may want to implement two-way data binding in **DataGrid** on your own. For this purpose, you can specify [cellTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate) and/or [editCellTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate) options. If so, make sure that you have the **twoWayBindingEnabled** option set to *false*.
<!--/fullDescription-->