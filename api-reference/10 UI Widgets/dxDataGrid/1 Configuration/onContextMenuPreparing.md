<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\contextMenuPreparing.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **contextMenuPreparing** event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action before a context menu is displayed in the grid. For instance, you can change the set of items in the menu.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget [instance](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->items<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->array<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the **ContextMenu** [default item template](/Documentation/ApiReference/UI_Widgets/dxMenu/Default_Item_Template). 
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->target<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->string<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The name of the grid element on which the context menu is invoked: 'headerPanel', 'header', 'content' or 'footer'.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->targetElement<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->jQuery<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The cell that has been clicked to invoke the context menu.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->columnIndex<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->number<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The current index of the column to which the clicked cell belongs. For more information on how this index is calculated, refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->column<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->object<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The [settings of the column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) to which the clicked cell belongs.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->rowIndex<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->number<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The *visible* index of the row to which the clicked cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group cells are also counted as rows and, thus, have row indexes. For further information about row indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->row<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->dxDataGridRowObject<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The settings of the row to which the clicked cell belongs.
<!--/typeFunctionParamDescription1_field10-->
