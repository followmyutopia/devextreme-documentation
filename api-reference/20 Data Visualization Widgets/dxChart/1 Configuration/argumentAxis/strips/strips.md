<!--id-->dxChart.Options.argumentAxis.strips<!--/id-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->Array<Object><!--/type-->
<!--inherits-->dxChart.Options.commonAxisSettings.stripStyle<!--/inherits-->
===========================================================================

<!--shortDescription-->
Declares a collection of strips belonging to the argument axis.
<!--/shortDescription-->

<!--fullDescription-->
A strip is a colored piece of the chart's background that highlights a range of values. Strips allow a viewer to see whether a certain series point falls in or out of a range.

![DevExtreme HTML5 Charts Strips](/Content/images/doc/19_2/ChartJS/visual_elements/strips.png)

Each object in the **strips** array configures a single strip. To limit a strip, set its **startValue** and **endValue** options. You may set only one of them, in which case the strip will not have a limit at one end. Note that setting the **color** option is also necessary for a strip to be displayed.

#####See Also#####
- **argumentAxis**.[stripStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/stripStyle/) - specifies the appearance of those strips that belong to the argument axis.
- **commonAxisSettings**.[stripStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/stripStyle/) - specifies the appearance of all strips in the widget.
<!--/fullDescription-->