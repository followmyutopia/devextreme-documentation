<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Options of load panel<!--/d-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies options configuring the [load panel](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Load_Panel).
<!--/shortDescription-->

<!--fullDescription-->
When **DataGrid** operates with a large number of records or uses a remote storage as a data source, loading data takes time. As data is being prepared, **DataGrid** displays a load panel.

The load panel consists of a pane, a loading indicator and a text. You can specify whether the pane or loading indicator must be displayed using the [showPane](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#showPane) or [showIndicator](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#showIndicator) options respectively. The text displayed by the load panel can be specified using the [text](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#text) option. Also, you can change the height or width of the load panel using the corresponding options of the **loadPanel** configuration object.

Additionally, you can show/hide the load panel from code when using the [beginCustomLoading(messageText)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#beginCustomLoadingmessageText) and [endCustomLoading()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#endCustomLoading) methods.

Since the grid load panel is practically the DevExtreme [LoadPanel](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/) widget, you can specify any option belonging to this widget in the **loadPanel** object.
<!--/fullDescription-->