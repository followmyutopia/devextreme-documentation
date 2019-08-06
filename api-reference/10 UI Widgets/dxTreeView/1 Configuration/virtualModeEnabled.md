<!--id-->dxTreeView.Options.virtualModeEnabled<!--/id-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Enables the virtual mode in which nodes are loaded on demand. Use it to enhance the performance on large datasets.
<!--/shortDescription-->

<!--fullDescription-->
If this option is **true**, the widget initially loads only the root nodes. Child nodes are loaded when their parent is being expanded.

The virtual mode has the following restrictions:

- The [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataSource) option should be set to a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance able to filter items by [parent ID](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#parentIdExpr).

- The [dataStructure](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataStructure) option should be set to *"plain"*.

- Since the [search](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#searchEnabled) will be performed on loaded nodes only and thus produce incorrect results, it is not recommended that you enable this functionality.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/TreeView/VirtualMode/jQuery/Light/"
}

#####See Also#####
- [Enhance Performance on Large Datasets](/Documentation/Guide/Widgets/TreeView/Enhance_Performance_on_Large_Datasets/)
- [createChildren](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren)
<!--/fullDescription-->
