The **List** is a widget that represents a collection of items in a scrollable list.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

The following code adds a simple **List** to your page. The simplest configuration of the widget requires only a [dataSource](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource) to be specified.

    <!--HTML--><div id="listContainer"></div>

    <!--JavaScript-->var fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits
        });
    });

The **List** supports a great variety of features. To learn more about a particular feature, refer to a dedicated topic in this documentation section.

#####See Also#####
- [List - Data Binding](/Documentation/Guide/Widgets/List/Data_Binding/)
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

[tags]list, overview