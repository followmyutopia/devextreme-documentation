The **Box** widget allows you to arrange various elements within it. Separate and adaptive, the **Box** widget acts as a building block for the layout.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-box-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a simple **Box** containing three items to your page. The items are plain texts placed in differently-colored rectangles. They have an equal width specified by equal values of the **ratio** option. The items are arranged in a row.

    <!--HTML--><div id="boxContainer">
        <div class="box-item orange" data-options="dxItem: { ratio: 1 }"> Item 1 </div>
        <div class="box-item yellow" data-options="dxItem: { ratio: 1 }"> Item 2 </div>
        <div class="box-item green"  data-options="dxItem: { ratio: 1 }"> Item 3 </div>
    </div>

<!---->

    <!--JavaScript-->$(function() {
        $("#boxContainer").dxBox({
            direction: "row",
            height: 100
        });
    });

<!---->

    <!--CSS-->.box-item {
        text-align: center;
        padding-top: 34px;
        font-size: 16px;
    }

    .orange { background: #f39e6c }
    .yellow { background: #f5e5a6 }
    .green { background: #94d7c7 }

Note that the **Box** items in the code above are declared using the [dxItem](/Documentation/ApiReference/UI_Widgets/Markup_Components/#dxItem) markup component. An object passed to this component can have the following fields. 

- [baseSize](/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#baseSize)
- [ratio](/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#ratio)
- [template](/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#template)
- [visible](/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#visible)

#####See Also#####
- [Widget Basics - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/)
- [Widget Basics - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/)
- [Widget Basics - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Box - Specify an Item Size](/Documentation/Guide/Widgets/Box/Specify_an_Item_Size/)
- [Box - Arrange and Align Items](/Documentation/Guide/Widgets/Box/Arrange_and_Align_Items/)
- [Box - Nest One Box into Another](/Documentation/Guide/Widgets/Box/Nest_One_Box_into_Another/)
- [Box API Reference](/Documentation/ApiReference/UI_Widgets/dxBox/)

[tags]box, layout widget, overview, dxItem