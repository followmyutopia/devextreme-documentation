---
id: dxDropDownButton.Options.dropDownContentTemplate
type: template
default: 'content'
---
---
##### shortDescription
Specifies custom content for the drop-down field.

##### param(data): Array<String, Number, Object> | DataSource
The array passed to the [items](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#items) option or a **DataSource** instance created using the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#dataSource) configuration.

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "drop-down field" }

##### return: String | Node | jQuery
A template name or container.

---
The drop-down field contains the [List](/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/) widget. Implement this template to replace the widget with custom content. The following restrictions apply when the template is specified:

- [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#itemTemplate) is ignored;
- [onItemClick](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#onItemClick) and [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#onSelectionChanged) are never executed;
- [selectedItemKey](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#selectedItemKey) should be updated manually.

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)