---
id: CollectionWidgetItem.template
type: template
---
---
##### shortDescription
Specifies an item template that should be used to render this item only.

##### return: String | Node | jQuery
A template name or container.

---
Whether you use a default or a custom template for widget items, you can specify a specific template for a particular item. To do so, set the **template** field for the data source object of this item. The following types of the specified value are available.

- Assign a string containing the name of the required [template](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/).
- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)