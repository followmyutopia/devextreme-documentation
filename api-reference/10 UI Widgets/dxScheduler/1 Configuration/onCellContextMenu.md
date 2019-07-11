<!--id-->dxScheduler.Options.onCellContextMenu<!--/id-->
<!--EventForAction-->dxScheduler.cellContextMenu<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e) | String<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when a user attempts to open the browser's context menu for a cell. Allows you to replace this context menu with a custom context menu.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/ContextMenuIntegration/jQuery/Light/"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
#include common-ref-elementparam with { element: "widget" }
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->cellData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data of the cell on which the context menu is invoked.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->cellElement<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->dxElement<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
#include common-ref-elementparam with { element: "cell" }
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->jQueryEvent<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->jQuery.Event<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The jQuery event that caused the handler's execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamDeprecated1_field6-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field6-->
<!--typeFunctionParamName1_field7-->event<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->event<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
#include common-ref-eventparam
<!--/typeFunctionParamDescription1_field7-->
