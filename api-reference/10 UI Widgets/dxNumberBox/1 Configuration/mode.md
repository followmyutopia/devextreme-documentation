===========================================================================
<!--default-->'text'<!--/default-->
<!--custom_default_for_mobile_devices-->'number'<!--/custom_default_for_mobile_devices-->
<!--acceptValues-->'text' | 'number' | 'tel'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the value to be passed to the [type](http://www.w3schools.com/tags/att_input_type.asp) attribute of the underlying `<input>` element.
<!--/shortDescription-->

<!--fullDescription-->
[note] If you set the [format](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#format) option, the **mode** for mobile devices is changed to *"tel"*; *"number"* is not available.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `NumberBoxMode` enum. This enum accepts the following values: `Text`, `Number` and `Tel`.
<!--/fullDescription-->
