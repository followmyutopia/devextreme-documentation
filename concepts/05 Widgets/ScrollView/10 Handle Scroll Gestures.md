The **ScrollView** raises the [pullDown](/Documentation/ApiReference/UI_Widgets/dxScrollView/Events/#pullDown) event when a user performs the [pull-to-refresh gesture](https://en.wikipedia.org/wiki/Pull-to-refresh). [Handle this event](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events) to refresh the content of the **ScrollView**. Note that the handling function should end with a call of the [release()](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#releasepreventScrollBottom) method to release the **ScrollView**.

    <!--JavaScript-->
    $(function() {
		$("#scrollViewContainer").dxScrollView({
            height: 500,
            bounceEnabled: true,
            onPullDown: function (e) {
                // Commands that refresh the content go here
                e.component.release();
            }
        });
    });

[note]To enable the pull-to-refresh gesture on desktops, set the [bounceEnabled](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#bounceEnabled) option to *true*.

If an end user scrolls the content down to the bottom, the **ScrollView** raises the [reachBottom](/Documentation/ApiReference/UI_Widgets/dxScrollView/Events/#reachBottom) event. You can handle it using the [onReachButtom](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#onReachBottom) function. Note that this function should also contain a call of the [release()](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#releasepreventScrollBottom) method. 

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            height: 500,
            onReachBottom: function (e) {
                // Event handling commands go here
                e.component.release();
            }
        });
    });

If you want to process each scroll gesture performed by a user, handle the [scroll](/Documentation/ApiReference/UI_Widgets/dxScrollView/Events/#scroll) event. The object passed to the handling function contains the **reachedTop**, **reachedBottom**, **reachedLeft** or **reachedRight** properties. Use them to check if scrolling has reached any of the content boundaries. Note that availability of these properties depends on the allowed [scrolling direction](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#direction).

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            height: 500,
            onScroll: function (e) {
                if (e.reachedBottom) {
                    // Here go the commands to be executed when the bottom is reached
                }
                // ...
            }
        });
    });

#####See Also#####
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events)
- [ScrollView - Scroll the Content](/Documentation/Guide/Widgets/ScrollView/Scroll_the_Content/)
- [ScrollView Demo](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scrollview-overview)
- [ScrollView API Reference](/Documentation/ApiReference/UI_Widgets/dxScrollView/)

[tags]scrollView, scroll view, pull down, pull-to-refresh, refresh, reach bottom, boundaries