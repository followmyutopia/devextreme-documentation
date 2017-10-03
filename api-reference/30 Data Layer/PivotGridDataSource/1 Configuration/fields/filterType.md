<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'include'<!--/default-->
<!--acceptValues-->'include' | 'exclude'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a user changes the current filter by including (selecting) or excluding (clearing the selection) [values](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterValues). Applies only if [allowFiltering](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowFiltering) is **true**.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values:

- *"include"*   
Values in the header filter are unselected initially. The user can change the filter by selecting (including) these values.
- *"exclude"*   
All values in the header filter are selected initially. The user can change the filter by unselecting (excluding) certain values.

A user can also change the **filterType** from the UI. Selecting all values changes the **filterType** to *"exclude"*; clearing selection using the *"Select All"* checkbox changes it to *"include"*.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `FilterType` enum. This enum accepts the following values: `Include` and `Exclude`.
<!--/fullDescription-->
