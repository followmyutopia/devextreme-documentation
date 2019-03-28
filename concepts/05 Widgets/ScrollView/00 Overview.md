The **ScrollView** is a widget that enables a user to scroll its content.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scrollview-overview"
}

The following code adds a simple **ScrollView** to your page. The [width](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#width) and [height](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#height) options specify the widget size. By default, the **ScrollView** allows a user to scroll its content vertically. To change this behavior, use the [direction](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#direction) option. Note that horizontal scrolling appears only if the content is wider than the **ScrollView**. Otherwise, the content adapts to the width of the **ScrollView**.

    <!--HTML-->
    <div id="scrollViewContainer">
        <!-- Here goes long content -->
    </div>

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            height: 500,
            width: 500,
            direction: 'both' // or 'horizontal' | 'vertical'
        });
    });

The **ScrollView** employs native scrolling on most platforms, except desktops. To employ it on all platforms without exception, assign **true** to the [useNative](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#useNative) option. Note that if you assign **false** to this option, the **ScrollView** will simulate scrolling on all platforms.

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            useNative: true
        });
    });

If simulated scrolling is used, you can specify when to show the scrollbar. For this purpose, use the [showScrollbar](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#showScrollbar) option.

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            useNative: false,
            showScrollbar: 'always' // or 'onScroll' | 'onHover' | 'never'
        });
    });

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [ScrollView - Handle Scroll Gestures](/Documentation/Guide/Widgets/ScrollView/Handle_Scroll_Gestures/)
- [ScrollView - Scroll the Content](/Documentation/Guide/Widgets/ScrollView/Scroll_the_Content/)
- [ScrollView API Reference](/Documentation/ApiReference/UI_Widgets/dxScrollView/)

[tags]scrollView, scroll view, overview, scrolling direction, native scrolling, simulated scrolling, scrollbar