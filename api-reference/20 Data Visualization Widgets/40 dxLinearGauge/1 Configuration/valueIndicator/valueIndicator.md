<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the appearance options of the value indicator.
<!--/shortDescription-->

<!--fullDescription-->
The value indicator is a pointer that designates the main value of the gauge. There are several types of value indicators. Set the required one by using the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/valueIndicator/#type) option, and then specify the options that are specific to this type, if needed. To learn about the options that can be specified for a particular type, refer to one of the following sections.

- [Circle](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Circle/)
- [RangeBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/RangeBar/)
- [Rectangle](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rectangle/)
- [Rhombus](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rhombus/)
- [TextCloud](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TextCloud/)
- [TriangleMarker](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TriangleMarker/)

When using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), configure the value indicator in the following manner.

    @(Html.DevExtreme().LinearGauge()
        // ...
        .ValueIndicator(i => i
            .Circle() // or any other indicator
            .Color("red")
            // ...
            // other indicator options go here 
        )
    )

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugeslineargaugeslineargaugebasicelementsdifferentvalueindicatortypes/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->