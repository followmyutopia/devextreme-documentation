---
id: dxTreeList.Options.filterMode
acceptValues: 'fullBranch' | 'withAncestors'
type: String
default: 'withAncestors'
---
---
##### shortDescription
Specifies whether to show filtered rows with ancestors and descendants (full branch) or with ancestors only.

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/TreeList/FilterModes/jQuery/Light/"
}

#include common-ref-enum with {
    enum: "`TreeListFilterMode`",
    values: "`FullBranch` and `WithAncestors`"
}