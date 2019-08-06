<!--id-->dxTreeList.getSelectedRowsData()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the data objects of the rows selected explicitly [via the API](/Documentation/Guide/Widgets/TreeList/Selection/#API/Initial_and_Runtime_Selection) or via a click or tap.
<!--/shortDescription-->

<!--returnType-->Array<any><!--/returnType-->
<!--returnDescription-->
Data objects of selected rows. The data objects are stored in the order the user selects rows.
<!--/returnDescription-->

<!--fullDescription-->
[note][Calculated values](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateCellValue) cannot be obtained because this method gets data objects from the data source.

#####See Also#####
#include common-link-callmethods
- [getSelectedRowsData(mode)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowsDatamode)
- [cellValue(rowIndex, dataField)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cellValuerowIndex_dataField)
- [cellValue(rowIndex, visibleColumnIndex)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cellValuerowIndex_visibleColumnIndex)
<!--/fullDescription-->