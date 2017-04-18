<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->number<!--/type-->
===========================================================================

<!--shortDescription-->
Controls the empty space between the minimum series points and the axis. Applies only to the axes of the *"continuous"* and *"logarithmic"* type.
<!--/shortDescription-->

<!--fullDescription-->
By default, the axes extend slightly beyond their extrema generating an empty space between the axes and the minimum/maximum series points. It prevents cutting off parts of those points. To control this empty space, use the **minValueMargin** and **maxValueMargin** options. These options are used in the following formulas for the actual start and end axis values.

<span style="font-size:13px">startAxisValue = min - (max - min) * minValueMargin<br />
endAxisValue = max + (max - min) * maxValueMargin</span>            

For example, consider that *min* is 1960 and *max* is 2010. If you set the **minValueMargin** and **maxValueMargin** options to 0.1, the axis will start in 1955 and end in 2015.

<span style="font-size:13px">startAxisValue = 1960 - (2010 - 1960) * 0.1 = 1960 - 50 * 0.1 = 1960 - 5 = 1955<br />
endAxisValue = 2010 + (2010 - 1960) * 0.1 = 2010 + 50 * 0.1 = 2010 + 5 = 2015</span>

#####See Also#####
- **commonAxisSettings** | [valueMarginsEnabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/#valueMarginsEnabled) - enables/disables margins for axes.
<!--/fullDescription-->