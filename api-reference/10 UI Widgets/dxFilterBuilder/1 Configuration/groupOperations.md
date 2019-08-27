---
id: dxFilterBuilder.Options.groupOperations
acceptValues: 'and' | 'or' | 'notAnd' | 'notOr'
type: Array<String>
default: ['and', 'or', 'notAnd', 'notOr']
---
---
##### shortDescription
Specifies a set of available group operations.

---
The group operations are:

- *"and"*       
- *"notAnd"*        
 Returns a reverted result of an *"and"* operation: `["!", [[condition1], "and", [condition2]]]`.
- *"or"*        
- *"notOr"*     
 Returns a reverted result of an *"or"* operation: `["!", [[condition1], "or", [condition2]]]`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FilterBuilder/Customization/jQuery/Light/"
}

#####See Also#####
- [maxGroupLevel](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#maxGroupLevel)
- [groupOperationDescriptions](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/groupOperationDescriptions/)