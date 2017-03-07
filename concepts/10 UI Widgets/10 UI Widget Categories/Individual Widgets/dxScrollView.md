<article data-show="Content/Applications/16_1/UIWidgets/dxScrollView/markup.html,
        Content/Applications/16_1/UIWidgets/dxScrollView/script.js,
        Content/Applications/16_1/UIWidgets/dxScrollView/styles.css">

The [ScrollView](/Documentation/ApiReference/UI_Widgets/dxScrollView/) widget is a wrapper for scrollable content. Scrollable content is placed inside the **dxScrollView** container.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposescrollviewscrollviewscrollview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

####End-user Gestures####

The widget supports the "Pull Down to Refresh" gesture. Assign the required function to the [onPullDown](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#onPullDown) option to perform a custom action after the widget is scrolled to the top and pulled down. When the function is called, the widget gets into the "refreshing" state. You should call the [release()](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#releasepreventScrollBottom) method at the end of the action to release the widget. You can access the widget instance using the **component** property of the action parameter object.

    <!--JavaScript-->
    var scrollViewOptions = {
        onPullDown: pulledDown
    }
    var pulledDown = function(actionOptions){
        alert("The widget is pulled down.");
        actionOptions.component.refresh();
    }

You can also specify the text displayed when the widget is about to be pulled down and when it is pulled down using the [pullingDownText](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#pullingDownText) and [pulledDownText](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#pulledDownText) options respectively. The refreshingText option specifies the text displayed while the widget is being refreshed.

    <!--JavaScript-->
    var scrollViewOptions = {
        onPullDown: pulledDown,
        pullingDownText: 'Pull down to refresh',
        pulledDownText: 'Release to refresh',
        refreshingText: 'Refreshing...'
    }

If an end-user scrolls the widget to the bottom, the widget executes the function passed to the [onReachBottom](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#onReachBottom) option and displays the text assigned to the [reachBottomText](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#reachBottomText) option.

    <!--JavaScript-->
    var reachedBottom = function(){
        alert("The widget is scrolled to the bottom.");
        actionOptions.component.refresh();
    }
    var scrollViewOptions = {
        onReachBottom: reachedBottom,
        reachBottomText: 'Loading...'
    }

You can also pass a function to the [onScroll](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#onScroll) option to process each scroll gesture.

    <!--JavaScript-->
    var scrolled = function(){
        alert("The widget is scrolled.");
    }
    var scrollViewOptions = {
        onScroll: scrolled
    }

####Scrolling Options####

By default, the widget can be scrolled only vertically. Use the [direction](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#direction) option to enable scrolling in vertical, horizontal or in both directions. The [showScrollBar](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#showScrollBar) option specifies whether the scrollbars are visible or not.

    <!--JavaScript-->
    var scrollViewOptions = {
        direction: 'both'
    }

####Programmatic Scrolling####

The **ScrollView** widget includes multiple methods used to scroll the widget to the required position. Refer to the [widget API reference](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollBydistance) for the information on these methods.

    <!--JavaScript-->
    var scrollToTargetPosition(target){
        var scrollView = $("#scrollViewContainer").dxScrollView("instance");
        scrollView.scrollTo(target);
    }

**Keyboard Support**

An end-user can use the following keys to interact with the widget.

- Up/down arrow  
 Scrolls content up/down.

- Page up/down  
 Scrolls content up/down by a page.

- Home/End  
 Scrolls content to the top/bottom.
</article>