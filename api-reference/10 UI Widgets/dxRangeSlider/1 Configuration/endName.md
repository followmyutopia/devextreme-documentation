<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->''<!--/default-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
The value to be assigned to the [name](http://www.w3schools.com/tags/att_input_name.asp) attribute of the underlying `<input>` element.
<!--/shortDescription-->

<!--fullDescription-->
Specify this and [startName](/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#startName) options if the widget lies within an HTML form that will be submitted.

If you configure the widget using [DevExtreme ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), use this option to bind the widget to a model property. If this model property contains [Data Annotation validation attributes](https://www.asp.net/mvc/overview/older-versions/mvc-music-store/mvc-music-store-part-6), you get the [client-side validation](/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Overview/) enabled by default.

    @(Html.DevExtreme().RangeSlider()
        .StartName("StartModelProperty")
        .EndName("EndModelProperty")
    )
<!--/fullDescription-->