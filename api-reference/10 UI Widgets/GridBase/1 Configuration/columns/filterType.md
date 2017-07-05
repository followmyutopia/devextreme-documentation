<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'include'<!--/default-->
<!--acceptValues-->'include' | 'exclude'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a user changes the current filter by including (selecting) or excluding (clearing the selection of) values. Applies only if [headerFilter]({basewidgetpath}/Configuration/headerFilter/) | **visible** and [allowHeaderFiltering]({basewidgetpath}/Configuration/columns/#allowHeaderFiltering) are **true**.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values.

- **include**       
Values in the header filter are unselected initially, and the user changes the filter by selecting, that is, including the values.
- **exclude**       
All values in the header filter are selected initially, and the user changes the filter by clearing the selection of certain values, that is, by excluding them.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `FilterType` enum. This enum accepts the following values: `Include` and `Exclude`.

#####See Also#####
- **columns[]** | [filterValues]({basewidgetpath}/Configuration/columns/#filterValues)
<!--/fullDescription-->