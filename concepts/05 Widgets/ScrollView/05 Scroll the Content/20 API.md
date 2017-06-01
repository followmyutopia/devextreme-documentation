To scroll the **ScrollView** content by a specified distance, call the [scrollBy(distance)](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollBydistance) method. If you need to scroll in the opposite direction, the `distance` parameter should be a negative number.

    <!--JavaScript-->
    $(function() {
        var scrollView = $("#scrollViewContainer").dxScrollView({
            height: 400
        }).dxScrollView("instance");

        $("#scrollUpButton").dxButton({
            text: "Scroll Up",
            onClick: function () {
                scrollView.scrollBy(-100);
            }
        });

        $("#scrollDownButton").dxButton({
            text: "Scroll Down",
            onClick: function () {
                scrollView.scrollBy(100);
            }
        });
    });

To scroll the content both vertically and horizontally, call the [scrollBy(distanceObj)](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollBydistanceObject) method with an object as an argument. The format of the object is the following: { left: *value1*, top: *value2* }. Note that in this case, the [direction](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#direction) option must be set to *"both"*

    <!--JavaScript-->
    $(function() {
        var scrollView = $("#scrollViewContainer").dxScrollView({
            height: 400,
            width: 100,
            direction: "both"
        }).dxScrollView("instance");

        $("#scrollButton").dxButton({
            text: "Scroll",
            onClick: function () {
                scrollView.scrollBy({ left: 100, top: 100 });
            }
        });
    });

To scroll the content to a specific position, call the [scrollTo(targetLocation)](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollTotargetLocation) method. Just like the **scrollBy()** method from the previous examples, the **scrollTo()** method accepts either a numeric value (when [directon](/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#direction) is *"left"* or *"right"*) or an object (when **direction** is *"both"*). The object should have the following format: { left: *value1*, top: *value2* }. Note that the top left corner of the **ScrollView** has the { left: 0, top: 0 } coordinates.

    <!--JavaScript-->
    $(function() {
        var scrollView = $("#scrollViewContainer").dxScrollView({
            height: 400,
            width: 100,
            direction: "vertical"
        }).dxScrollView("instance");

        $("#scrollButton").dxButton({
            text: "Scroll",
            onClick: function () {
                scrollView.scrollTo(500);
            }
        });
    });

To scroll the content to a specific element, call the [scrollToElement(targetLocation)](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollToElementtargetLocation) method. 

    <!--HTML-->
    <div id="scrollViewContainer">
        <!-- Here goes long content -->
        <div id="end"></div>
    </div>

    <!--JavaScript-->
    $(function() {
        var scrollView = $("#scrollViewContainer").dxScrollView({
            height: 400,
            width: 100,
            direction: 'vertical',
        }).dxScrollView("instance");

        $("#scrollButton").dxButton({
            text: "Scroll ",
            onClick: function () {
                // Scrolls the content to the element with the "end" id
                scrollView.scrollToElement($("#end"));
            }
        });
    });

To get the current scroll position against the top left corner, call the [scrollOffset()](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollOffset) method. It returns an object of the following format: { top: *topScrollOffset*, left: *leftScrollOffset* }. If you need to get only the top or left scroll offset, use the [scrollTop()](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollTop) and [scrollLeft()](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollLeft) methods, respectively.

#####See Also#####
- [ScrollView - Handle Scroll Gestures](/Documentation/Guide/Widgets/ScrollView/Handle_Scroll_Gestures/)
- [ScrollView Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scrollview-overview)
- [ScrollView API Reference](/Documentation/ApiReference/UI_Widgets/dxScrollView/)