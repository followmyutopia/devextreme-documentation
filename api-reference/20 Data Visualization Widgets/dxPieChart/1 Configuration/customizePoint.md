<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Custom style of individual point<!--/d-->
===========================================================================
<!--handmade--><!--/handmade-->
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
By default, all the points of a pie are displayed identically. But you can specify different appearance for certain points using the **customizePoint** field. Assign a function to this field. This function should return an object with options that should be changed for a certain point. The following pie options can be changed.

* [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/border/)
* [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#color)
* [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/hoverStyle/)
* [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/selectionStyle/)

When implementing a callback function for this option, use the argument or value of a point. They can be accessed using the following fields of the function's parameter.

* **argument**    
The argument of the point.
* **value**        
The value of the point.
* **tag**    
The tag of the point.
* **index**        
The index of the point in the points array.

In addition, these values can be accessed using the **this** object.
<!--/fullDescription-->
