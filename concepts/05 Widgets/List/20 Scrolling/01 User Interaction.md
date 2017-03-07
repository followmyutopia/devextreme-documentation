An end user can scroll the **List** with a swipe gesture and with the scrollbar. Although by default the swipe gesture is active for mobile devices and the scrollbar is active for desktops, you can force any or both of them to be used on all platforms. For this purpose, set the [scrollByContent](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#scrollByContent) or [scrollByThumb](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#scrollByThumb) option to *true*.

    <!--JavaScript-->
    $(function() {
		$("#listContainer").dxList({
            // ...
            scrollByContent: true, // the swipe gesture on all platforms
            scrollByThumb: true // the scrollbar on all platforms
        });
    });

The **List** employs native scrolling on most platforms, except non-Mac desktops and devices based on Android older than version 4. To employ native scrolling on all platforms without exception, assign *true* to the [useNativeScrolling](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#useNativeScrolling) option. Note that if you assign *false* to this option, the **List** will simulate scrolling on all platforms.

    <!--JavaScript-->
    $(function() {
		$("#listContainer").dxList({
            // ...
            useNativeScrolling: true
        });
    });

If simulated scrolling is used, you can specify when to show the scrollbar. For this purpose, use the [showScrollbar](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#showScrollbar) option.

    <!--JavaScript-->
    $(function() {
		$("#listContainer").dxList({
            // ...
            useNativeScrolling: false,
            showScrollbar: 'always' // or 'onScroll' | 'onHover' | 'never'
        });
    });

On mobile devices, the user can pull the **List** to scroll it slightly further than its top or bottom boundary. Once the user releases the **List**, it bounces back to the boundary position. You can disable this effect using the [bounceEnabled](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#bounceEnabled) option.

    <!--JavaScript-->
    $(function() {
		$("#listContainer").dxList({
            // ...
            bounceEnabled: false
        });
    });

If you want to disable scrolling completely, assign *false* to the [scrollingEnabled](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#scrollingEnabled) option.

    <!--JavaScript-->
    $(function() {
		$("#listContainer").dxList({
            // ...
            scrollingEnabled: false
        });
    });

#####See Also#####
- [Widget Basics - Create and Configure a Widget](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)