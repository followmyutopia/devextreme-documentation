---
id: dxFormSimpleItem.template
type: template
---
---
##### shortDescription
A template to be used for rendering the form item.

##### param(data): Object
The item's data.

##### field(data.component): dxForm
The **Form** instance.

##### field(data.dataField): String
The item's [dataField](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField).

##### field(data.editorOptions): Object
The item editor's [configuration](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions).

##### field(data.editorType): String
The editor's [type](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType).

##### field(data.name): String
The item's [name](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#name).

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | Node | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Common/FormsAndMultiPurposeOverview/jQuery/Light/"
}

#####See Also#####
- [Customize a Simple Item](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Customize_a_Simple_Item)