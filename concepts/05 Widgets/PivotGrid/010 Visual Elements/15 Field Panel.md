The Field Panel is a component that displays the fields involved in calculation of grid summaries. It consists of four field areas: column, row, data and filter. Each area holds fields of the corresponding type.

![DevExtreme PivotGrid FieldPanel](/Content/images/doc/17_2/DataGrid/PivotGrid_fieldPanel_areas.png)

By default, the whole Field Panel is hidden. To make it visible, assign *true* to the **visible** property of the [fieldPanel](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/) object.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        fieldPanel: {
            // ...
            visible: true // shows the Field Panel
        }
    };

If the Field Panel is made visible, all field areas become visible as well. To hide an individual field area, assign *false* to the dedicated option. 

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        fieldPanel: {
            // ...
            showColumnFields: false, // hides the column field area
            showRowFields: false, // hides the row field area
            showDataFields: false, // hides the data field area
            showFilterFields: false // hides the filter field area
        }
    };
    
The Field Panel partially covers the functionality provided by the [Field Chooser](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser). For example, the user can reorder fields within a single field area or even between them. If this capability is not required, assign *false* to the **fieldPanel** | [allowFieldDragging](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#allowFieldDragging) property.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        fieldPanel: {
            // ...
            allowFieldDragging: false // makes all fields on the Field Panel undraggable
        }
    };

Moreover, if the [allowSorting](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowSorting) and [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowFiltering) options are *true*, the user can apply sorting and filtering to fields directly from the Field Panel.

Functional similarities of the Field Panel and the Field Chooser allow them to work in conjunction. When the fields of the Field Panel are draggable, and the Field Chooser is invoked, the user can move the fields not only within these components, but between them as well.

When empty, each field area of the Field Panel displays an individual placeholder. If you need to change it, use the properties of the **fieldPanel** | [texts](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/texts/) object.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/FieldPanel/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>