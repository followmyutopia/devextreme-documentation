<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'native'<!--/default-->
<!--custom_default_for_android_below_version_4-->'rollers'<!--/custom_default_for_android_below_version_4-->
<!--custom_default_for_desktop-->'rollers'<!--/custom_default_for_desktop-->
<!--custom_default_for_windows-->'rollers'<!--/custom_default_for_windows-->
<!--custom_default_for_generic_desktop-->'calendar'<!--/custom_default_for_generic_desktop-->
<!--custom_default_for_no-phone_windows-->'calendar'<!--/custom_default_for_no-phone_windows-->
<!--acceptValues-->'native' | 'calendar' | 'rollers' | 'list'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of the date/time picker.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values.

- "native"  
 The picker type depends on the current platform or web browser.

- "calendar"  
 The date box uses the **Calendar** widget to pick data. This value applies only when the [type](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type) option is set to "date" or "datetime".

- "rollers"  
 The widget uses rollers to pick the date and time.

- "list"  
 The widget uses the list of time values to pick the time. This value applies only when the [type](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type) option is set to "time".

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `DateBoxPickerType` enum. This enum accepts the following values: `Native`, `Calendar`, `Rollers` and `List`.
<!--/fullDescription-->