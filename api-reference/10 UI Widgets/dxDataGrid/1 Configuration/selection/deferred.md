---
id: dxDataGrid.Options.selection.deferred
type: Boolean
default: false
---
---
##### shortDescription
Makes selection deferred.

---
Consider making selection deferred if the widget needs to operate a large volume of data and the user is allowed to [select all rows at once](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll). Unlike usual (or "instant") selection, in the case of deferred selection, the widget requests data only when you demand this using the API, for example, when the [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData) or [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys) method is called. This mode has certain specifics that determine the API you need to use. For more information, see the [Deferred Selection](/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Deferred_Selection) article.

[note]Deferred selection is unsupported when [selectAllMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#selectAllMode) is *"page"*.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Data_Grid/DeferredSelection/jQuery/Light/"
}