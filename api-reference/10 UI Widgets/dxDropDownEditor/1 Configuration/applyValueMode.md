===========================================================================
<!--default-->'instantly'<!--/default-->
<!--acceptValues-->'instantly' | 'useButtons'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the way an end-user applies the selected value.
<!--/shortDescription-->

<!--fullDescription-->
The option accepts the following values.

- 'useButtons'  
 Enables an end-user to apply the selected value or cancel the selection using the Apply and Cancel buttons respectively.

- 'instantly'  
 Applies the selected value immediately after a user clicks the required value in the drop-down menu. To cancel the selection, click outside the drop-down menu.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `EditorApplyValueMode` enum. This enum accepts the following values: `Instantly` and `UseButtons`.
<!--/fullDescription-->