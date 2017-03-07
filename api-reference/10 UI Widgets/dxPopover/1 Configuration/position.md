<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Specifies popover position.<!--/d-->
===========================================================================
<!--default-->'bottom'<!--/default-->
<!--acceptValues-->'top' | 'bottom' | 'left' | 'right'<!--/acceptValues-->
<!--type-->string | positionConfig<!--/type-->
===========================================================================

<!--shortDescription-->
An object defining widget [positioning options](/Documentation/ApiReference/Common/Object_Structures/positionConfig/).
<!--/shortDescription-->

<!--fullDescription-->
Besides the position configuration object, the option can take on the following string values, which are shortcuts for the corresponding position configuration.

- 'top' - places the popover over the target element
- 'bottom' - places the popover under the target element
- 'left' - places the popover to the left of the target element
- 'right' - places the popover to the right of the target element

[note]To specify the element against which the context menu will be positioned, use the [target](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#target) option instead of the [of](/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of) field of the **position** object. If both **target** and **of** are specified, **target** will be used.
<!--/fullDescription-->