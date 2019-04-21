===========================================================================
<!--hidden--><!--/hidden-->
<!--type-->Object<!--/type-->
<!--inherits-->..\DOMComponent\DOMComponent.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A widget used to display scrollable content.
<!--/shortDescription-->

<!--fullDescription-->
The **Scrollable** widget represents a scrollable field that shows the data located inside the HTML element representing the widget.

This widget, like any other DevExtreme UI widget, can be created using one of three possible approaches: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/), [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/) or [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/). The following code demonstrates how to create the **Scrollable** widget using the Knockout approach.

    <!--HTML--><div data-bind="dxScrollable:{}">
        <p>The text that should be displayed by the widget.</p>
    </div>
<!--/fullDescription-->