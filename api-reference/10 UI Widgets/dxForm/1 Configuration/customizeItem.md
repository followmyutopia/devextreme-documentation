---
id: dxForm.Options.customizeItem
type: function(item)
---
---
##### shortDescription
Specifies a function that customizes a form item after it has been created.

##### param(item): dxFormSimpleItem | dxFormGroupItem | dxFormTabbedItem | dxFormEmptyItem | dxFormButtonItem
The item's object.

---
If you did not define form items using the [items]({basewidgetpath}/Configuration/#items) option, the **Form** widget creates them automatically according to the structure of an object passed to the [formData]({basewidgetpath}/Configuration/#formData) option. The **customizeItem** option enables you to modify options of each generated item before this item is rendered. Each generated item passed to this function as an argument has a [Simple Item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/) structure.

If the **items** option contains definition for form items, you usually do not need to pass a function to the **customizeItem** option because you can customize items before passing them to the **items** option. However, if you assign a function to this option, it will be called for each item. In this case, an item can have structure corresponding to any of the following item types.

- [Simple](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/)  
 A standard item consisting of a label and an editor widget used to specify a value of the associated data field.

- [Group](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/)  
 An item representing a container of other form items.

- [Tabbed](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/)  
 An item representing a tabbed container of other form items.

- [Empty](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/)  
 An empty item used to add a space between neighboring form items.


#####See Also#####
- [Customize a Simple Item](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Customize_a_Simple_Item)