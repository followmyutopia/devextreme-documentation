===========================================================================
<!--default-->'withAncestors'<!--/default-->
<!--acceptValues-->'fullBranch' | 'matchOnly' | 'withAncestors'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether filter and search results should include only matching rows or their ancestors and/or descendants as well.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/TreeList/FilterModes/jQuery/Light/"
}

#include common-ref-enum with {
    enum: "`TreeListFilterMode`",
    values: `FullBranch`, `MatchOnly`, and `WithAncestors`"
}
<!--/fullDescription-->
