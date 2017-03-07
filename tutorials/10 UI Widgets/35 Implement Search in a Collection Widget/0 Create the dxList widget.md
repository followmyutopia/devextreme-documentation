<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_1/Framework/CollectionWidgetSearch/Step1/markup.html">
DevExtreme collection widgets can access a data array directly or using a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance. In this tutorial, you will create a DataSource instance based on an array because search implementation requires **DataSource** search capabilities.

To create a **DataSource** instance accessing an array, call the **DataSource** constructor and pass the required array to this constructor. 

Then add a [List](/Documentation/ApiReference/UI_Widgets/dxList/) widget to the application.

To add a list widget, add a **div** element with the **id** attribute set to "myList" to the body of the HTML document as shown in the HTML file below. To associate the [List](/Documentation/ApiReference/UI_Widgets/dxList/) widget with the created element, call the **List** constructor once the document has been loaded and pass the appropriate configuration object to this constructor.

- [Widget Basics - jQuery](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/) - details on how to work with widgets with jQuery approach
- [Widget Basics - Angular](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/) - details on how to work with widgets with AngularJS approach
- [Widget Basics - Knockout](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/) - details on how to work with widgets with Knockout approach
</article>