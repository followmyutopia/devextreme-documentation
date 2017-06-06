<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_2/Framework/FormTutorial/Step3/form.html" data-show-first="form.html">

**Form** uses an object as its data source. To provide such an object to the widget, assign it to the [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) option.

In this tutorial, an array with data called *employees* is declared in a separate *.js*-file. Reference this file on your HTML-page the same way you have referenced libraries in the previous steps. Note that the *employees* array contains three objects. Since **Form** can accept only one object, specify which one to use as a data source in the widget.

If you launch the app now, you will see a collection of label-editor pairs. Each element in the **Form** widget, such as these pairs, is called an *item*. There are four types of items in the **Form** widget.

-   [Simple Item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/)     
A standard item that consists of a label and an editor that modifies the data object field associated with it.

-   [Group Item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/)      
A container for nested items of other types. These items are placed under a caption.

-   [Tabbed Item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/)        
Like a group item, this is a container for other items, only a tabbed item displays nested items as tabs.

-   [Empty Item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/)      
An item used to add spaces between neighboring items.

In the further steps, you will configure the appearance of the items as well as their composition.
</article>