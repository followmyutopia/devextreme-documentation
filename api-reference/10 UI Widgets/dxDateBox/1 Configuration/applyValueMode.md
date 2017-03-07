<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Specifies apply value mode<!--/d-->
===========================================================================
<!--default-->'instantly'<!--/default-->
<!--acceptValues-->'useButtons' | 'instantly'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the way an end-user applies the selected value.
<!--/shortDescription-->

<!--fullDescription-->
The option accepts the following values.

- 'useButtons'  
 Enables an end-user to apply the selected value or cancel the selection using the Apply and Cancel buttons respectively.

- 'instantly'  
 Applies the selected value immediately after a user clicks the required value in the drop-down menu. This value cannot be applied if the [pickerType](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType) is *"rollers"* or the [type](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type) is *"datetime"*.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `EditorApplyValueMode` enum. This enum accepts the following values: `Instantly` and `UseButtons`.
<!--/fullDescription-->
<!--handmade-->
<!--/handmade-->