<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--dep--><!--/dep-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Number | Object<!--/type-->
===========================================================================

<!--deprecated-->
Use the [placeholderHeight](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/#placeholderHeight) and [indent](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/indent/) options instead.
<!--/deprecated-->

<!--shortDescription-->
Specifies in pixels the height and width of the space reserved for the range selector slider markers.
<!--/shortDescription-->

<!--fullDescription-->
You can set a numeric value to this property. This value will be used as a width and height of both the left and right slider markers. You can also set individual values for a width and height, and make them similar or different for the left and right slider markers. To do this, specify **placeholderSize** as an object. When setting this object's properties, take into account the font size of the text displayed in the slider markers.

You may need to set this property, when you need to know the exact size of the **RangeSelector** widget elements in vertical and horizontal directions. For instance, this may be required when displaying an image in the background in a stretched mode. To get the background height, subtract the scale's [placeholder height](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#placeholderHeight) and the slider markers' placeholder height from the **RangeSelector**'s [height](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/size/#height). To get the background width, subtract the placeholder widths of slider markers from the **RangeSelector**'s [width](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/size/#width).
<!--/fullDescription-->