If list content height exceeds the widget height, an end user can scroll content vertically to view the required item.

Scrolling is enabled by default. However, you can set the [enableScrolling](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#scrollingEnabled) option to *false* to disable it.

If scrolling is enabled, you can specify whether or not a user can scroll the widget by content and by a scroll bar thumb using the [scrollByContent](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#scrollByContent) and [scrollByThumb](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#scrollByThumb) options respectively.

    <!--JavaScript-->
    var listOptions: {
        . . .
        scrollByThumb: true,
        scrollByContent: true
    }

The **List** widget also enables you to scroll its content programmatically using the [scrollBy(distance)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#scrollBydistance), [scrollTo(location)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#scrollTolocation), [scrollToItem(itemElement)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#scrollToItemitemElement), [scrollToItem(itemIndex)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#scrollToItemitemIndex) or [scrollTop()](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#scrollTop) method.

    <!--JavaScript-->
    // Get widget instance
    . . .
    listInstance.scrollToItem(15);

In addition, you can execute a custom action once the list has been scrolled. Handle the [scroll](/Documentation/ApiReference/UI_Widgets/dxList/Events/#scroll) event or pass the required function to the [onScroll](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onScroll) option.

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events)
- [Handle Events - AngularJS](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events)
- [Handle Events - Knockout](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events)
