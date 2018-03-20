All custom operations are configured in the [customOperations](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/) array. Follow the steps below to declare an operation:

1. **Specify the operation's name.**         
    The name identifies the operation and is used later in the widget's filter expression in the [value](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#value) option. Specify it using the [name](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#name) option.

2. **Express the operation through DataSource-compatible operations.**      
    Filtering is implemented using the **DataSource** which supports only a limited set of filter operations. Use the [calculateFilterExpression](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#calculateFilterExpression) function to express your custom operation through these **DataSource**-compatible operations.

3. **Customize the appearance.**     
    Specify the [caption](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#caption) and [icon](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#icon) to be used for displaying the operation in the drop-down list. You can also customize the editor using the [editorTemplate](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#editorTemplate) option and the value's text representation using the [customizeText](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#customizeText) option.

4. **Make the operation available for fields.**      
    Set the [dataTypes](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#dataTypes) option to make the operation available for fields of specific data types. You can also make it available for an individual field by including the operation's **name** in the field's [filterOperations](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#filterOperations) array.


#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FilterBuilder/WithList/jQuery/Light/"
}
