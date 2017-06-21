<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Redraws a widget.
<!--/shortDescription-->

<!--paramName1-->renderOptions<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
An object containing rerendering options.
<!--/paramDescription1-->

<!--fullDescription-->
You can call the **render** method without parameters after the size or visibility of the widget container is changed. Alternatively, call the **render** method passing an object as the parameter. This object must contain the **force** field set to *'true'*. In addition, you can use this object to specify whether or not to perform animation on redrawing with the **animate** field, and whether or not to redraw the widget in an asynchronous mode with the **asyncSeriesRendering** field.

The following code sample illustrates the example of the object that can be passed to the **render** method.

    <!--JavaScript-->var renderOptions = {
        force: true, // forces redrawing
        animate: false, // redraws the widget without animation
        asyncSeriesRendering: false // redraws the widget synchronously
    }

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
<!--/fullDescription-->