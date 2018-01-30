===========================================================================
<!--default-->'calendar', 'native' (iOS, Android), 'rollers' (Android_below_version_4.4, phones_on_Windows_Mobile)<!--/default-->
<!--acceptValues-->'calendar' | 'list' | 'native' | 'rollers'<!--/acceptValues-->
<!--type-->String<!--/type-->
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

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `DateBoxPickerType` enum. This enum accepts the following values: `Native`, `Calendar`, `Rollers` and `List`.
<!--/fullDescription-->