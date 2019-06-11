<!--id-->dxTreeList.Options.filterMode<!--/id-->
===========================================================================
<!--default-->'withAncestors'<!--/default-->
<!--acceptValues-->'fullBranch' | 'withAncestors'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether to show filtered rows with ancestors and descendants (full branch) or with ancestors only.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/TreeList/FilterModes/jQuery/Light/"
}

#include common-ref-enum with {
    enum: "`TreeListFilterMode`",
    values: "`FullBranch` and `WithAncestors`"
}
<!--/fullDescription-->