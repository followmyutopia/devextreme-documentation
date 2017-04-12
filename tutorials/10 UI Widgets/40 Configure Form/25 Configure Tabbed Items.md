<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_1/Framework/FormTutorial/Step5/form.html" data-show-first="form.html">
A tabbed item displays nested items inside of tabs. To define a tabbed item, add an object to the **Form** | [items](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items) array. In this object, assign *"tabbed"* to the [itemType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/#itemType) option.

Tabs to be displayed in a tabbed item are declared in the [tabs](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/) array. Each tab can nest one or many items of any type. To configure them, use the [items](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#items) array inside the tab's configuration object. Obviously, nested items in a tab and in a group are configured likewise.

In those cases, when the default data representation doesn't suit your requirements, you can specify a template for the tab contents.

In this tutorial, the *"Profile"* tab uses a template that is a function returning a jQuery-object.

In **MVVM approach**, the *"Profile"* tab uses [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) - a markup component from the DevExtreme library. The name of the template is assigned to the tab's [template](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#template) option.

Additionally, you can add a title to a tab using the [title](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#title) option. To learn more about options of a tabbed item, see the [Tabbed Item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/) reference section.

In the next step, you will add a data validator to the app.
</article>