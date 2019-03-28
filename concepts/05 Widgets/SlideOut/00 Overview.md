The **SlideOut** widget is a classic slide-out menu paired with a view. An end user opens the menu by swiping away the view.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigation-slideout-overview/ios7"
}

The following code adds a primitive **SlideOut** to your page.

    <!--HTML--><div id="slideOutContainer"></div>
    
    <!--JavaScript-->$(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: ["SuperLCD 42", "SuperLED 42", "SuperLED 50",
                         "SuperLCD 55", "SuperLCD 70", "DesktopLCD 19",
                         "DesktopLCD 21", "DesktopLED 21"],
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

    <!--CSS-->#slideOutContainer {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

Note that the [dataSource](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#dataSource) option accepts an array of strings. An individual menu item will be generated for each of these strings. As an alternative, the **dataSource** option accepts an array of objects. In this case, each of these objects should posess the [text](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Default_Item_Template/#text) field, otherwise the menu item for it will be unnamed.

    <!--JavaScript-->var displays = [
        { text: "SuperLCD 42", price: "$1200" },
        { text: "SuperLED 42", price: "$1450" },
        { text: "SuperLED 50", price: "$1600" },
        { text: "SuperLCD 55", price: "$1350" },
        { text: "SuperLCD 70", price: "$4000" },
        { text: "DesktopLCD 19", price: "$160" },
        { text: "DesktopLCD 21", price: "$170" },
        { text: "DesktopLED 21", price: "$180" }
     ];

    $(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: displays,
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

[note]The **SlideOut** contains the [List](/Documentation/Guide/Widgets/List/Overview/) widget in the slide-out menu. If you need to put another collection widget there, use the [SlideOutView](/Documentation/Guide/Widgets/SlideOutView/Overview/) instead of the **SlideOut**.

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [SlideOut - Customize Menu Items](/Documentation/Guide/Widgets/SlideOut/Customize_Menu_Items)
- [SlideOut - Group Menu Items](/Documentation/Guide/Widgets/SlideOut/Group_Menu_Items)
- [SlideOut - Customize the View](/Documentation/Guide/Widgets/SlideOut/Customize_the_View)
- [SlideOut - Open and Close the Menu Using the API](/Documentation/Guide/Widgets/SlideOut/Open_and_Close_the_Menu_Using_the_API)
- [SlideOut API Reference](/Documentation/ApiReference/UI_Widgets/dxSlideOut/)

[tags]slide-out menu, slideOut, navigation, collection container, collection widget, overview