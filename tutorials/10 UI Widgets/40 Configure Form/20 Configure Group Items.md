<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_2/Framework/FormTutorial/Step4/form.html" data-show-first="form.js">
To configure **Form** items, assign an array of objects to the [items](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items) option of the main configuration object. Note that the sequence of items in the **items** array coincides with that in the actual widget.

Group and tabbed items usually have nested items. Nested items are also configured using the **items** array, only declared within the object configuring their parent group or tabbed item. In this tutorial, a group item will collect several simple items alternated by empty items. 

- **Specifying a Data Source Field**    
To specify a group item, assign *'group'* to the [itemType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#itemType) option of an object in the **Form** | **items** array. Declare the [items](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#items) array within this object. This array may contain data field names and configuration objects. If you do not change any of the item's default options, use a data field name only. In other cases, assign the data field name to the [dataField](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField) option of a configuration object. In this demo, the *"First_Name"* and *"Last_Name"* items are defined using data field names only, while  *"Full_Name"*, for example, is defined using a configuration object.

- **Configuring Nested Widgets**      
**Form** can nest virtually any editor from the DevExtreme library to modify a data value. By default, it is [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/). To specify another one, set the [editorType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType) option.

    Nested widgets can be configured using the [editorOptions](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions) object. In this demo, the *"Prefix"* and *"Status"* items have the [SelectBox](/Documentation/ApiReference/UI_Widgets/dxSelectBox/) widget as the editor. Its collection of items is defined using the **editorOptions** | **dataSource** field. To discover options available for a specific widget, refer to the corresponding [reference](/Documentation/ApiReference/UI_Widgets/) section.

- **Handling Events**     
**Form** exposes several [events](/Documentation/ApiReference/UI_Widgets/dxForm/Events/) that you can handle. This demo uses the [onFieldDataChanged](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onFieldDataChanged) event handler to combine the *"First_Name"* and *"Last_Name"* data fields and assign the result to the read-only *"Full_Name"* data field.

- **Arranging Empty Items**     
To disassociate one item from its neighbouring one, place an empty item between them. To do this, insert an object into the **items** array. This object must have the **itemType** field set to *"empty"*.

For a comprehensive list of options belonging to a group item, refer to the [Group Item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/) reference section. In the next step, you will learn to configure tabbed items in the **Form** widget.

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
</article>