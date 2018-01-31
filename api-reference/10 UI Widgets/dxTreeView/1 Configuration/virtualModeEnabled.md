===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies if the virtual mode is enabled.
<!--/shortDescription-->

<!--fullDescription-->
If the option is set to **true**, the widget initially loads only root items. Child items are loaded when their parent is being expanded.

[note]You can use the virtual mode only if the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataSpource) option holds the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance able to filter items by [parent ID](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#parentIdExpr), and the [dataStructure](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataStructure) option is set to "plain". Otherwise, the **virtualModeEnabled** option is ignored.

Use this option to improve the widget performance when working with a huge data source.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/TreeView/VirtualMode/jQuery/Light/"
}

#####See Also#####
- [Enhance Performance on Large Datasets](/Documentation/Guide/Widgets/TreeView/Enhance_Performance_on_Large_Datasets/)
- [createChildren](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren) - allows you to load nodes manually.
<!--/fullDescription-->