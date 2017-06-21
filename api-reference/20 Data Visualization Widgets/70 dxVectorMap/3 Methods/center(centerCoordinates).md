<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Sets the coordinates of the map center.
<!--/shortDescription-->

<!--paramName1-->centerCoordinates<!--/paramName1-->
<!--paramType1-->array<!--/paramType1-->
<!--paramDescription1-->
New coordinates for the map center. Pass <i>null</i> to reset the coordinates.
<!--/paramDescription1-->

<!--fullDescription-->
To change the coordinates of the map center, pass an array of two values in the [*longitude*, *latitude*] form as the argument to the **center(centerCoordinates)** method.

In addition, you can get the current coordinates of the map center by calling the same method without arguments. Moreover, you can perform specific actions when the center coordinates are changed. For this purpose, implement a callback function and assign it to the [onCenterChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onCenterChanged) option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapzoomingandcentering/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
<!--/fullDescription-->