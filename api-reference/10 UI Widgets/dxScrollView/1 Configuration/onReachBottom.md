---
id: dxScrollView.Options.onReachBottom
type: function(e)
default: null
EventForAction: dxScrollView.reachBottom
---
---
##### shortDescription
A function that is executed when the content is scrolled down to the bottom.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
The function passed to this option should contain a call to the [release()](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#releasepreventScrollBottom) method, which releases the scroll view.

    <!--JavaScript-->
    var scrollViewOptions = {
        onReachBottom: function(options){
            . . .
            options.component.release();
        }
    }