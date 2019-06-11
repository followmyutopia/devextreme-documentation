<!--id-->dxTreeView.Options.showCheckBoxesMode<!--/id-->
===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'none' | 'normal' | 'selectAll'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the current check boxes display mode.
<!--/shortDescription-->

<!--fullDescription-->
The option accepts the following values.

- "none"  
 The widget does not display check boxes.

- "normal"  
 The widget displays a check box for each item.

- "selectAll"  
 The widget displays a check box for each item and the "select all" check box at the top of the widget.

#include common-ref-enum with {
    enum: "`TreeViewCheckBoxMode`",
    values: "`None`, `Normal`, and `SelectAll`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization/jQuery/Light/"
}

#####See Also#####
- [Select Nodes - User Interaction](/Documentation/Guide/Widgets/TreeView/Select_Nodes/#User_Interaction)
<!--/fullDescription-->