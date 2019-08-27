---
id: dxFunnel.Options.resolveLabelOverlapping
acceptValues: 'hide' | 'none' | 'shift'
type: String
default: 'shift'
---
---
##### shortDescription
Specifies how [item labels](/Documentation/Guide/Widgets/Funnel/Item_Labels/Overview/) should behave when they overlap.

---
The following modes are available:

- *"shift"*     
Item labels shift from their positions. If they still overlap, some of them hide. 

- *"hide"*      
Certain item labels hide.

- *"none"*      
Item labels overlap.

#include common-ref-enum with {
    enum: "`FunnelResolveLabelOverlapping`",
    values: "`None`, `Hide`, and `Shift`"
}

#####See Also#####
- **label**.[position](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/#position)