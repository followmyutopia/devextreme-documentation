===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the [field panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel).
<!--/shortDescription-->

<!--fullDescription-->
The field panel is a component that displays the fields involved in the calculation of grid summaries. It consists of four field areas: column, row, data and filter. Each area holds fields of the corresponding type.

By default, the field panel is hidden. To make it visible, assign **true** to the [visible](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#visible) property. To control the visibility of an individual field area, change the [showColumnFields](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#showColumnFields), [showRowFields](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#showRowields), [showDataFields](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#showDataFields) or [showFilterFields](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#showFilterFields) property respectively.

The field panel partially covers the functionality provided by the [field chooser](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser). For example, the user can reorder fields within a single field area or even between them. This capability is controlled by the value of the  [allowFieldDragging](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#allowFieldDragging) property.

In addition, if the [allowSorting](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowSorting) and [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowFiltering) options are **true**, the user can apply sorting and filtering to fields directly from the field panel.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/FieldPanel/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<!--/fullDescription-->