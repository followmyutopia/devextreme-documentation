===========================================================================
<!--default-->'include'<!--/default-->
<!--acceptValues-->'exclude' | 'include'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a user changes the current filter by including (selecting) or excluding (clearing the selection of) values. Applies only if [headerFilter]({basewidgetpath}/Configuration/headerFilter/).**visible** and [allowHeaderFiltering]({basewidgetpath}/Configuration/columns/#allowHeaderFiltering) are **true**.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values.

- **include**       
Values in the header filter are unselected initially, and the user changes the filter by selecting, that is, including the values.
- **exclude**       
All values in the header filter are selected initially, and the user changes the filter by clearing the selection of certain values, that is, by excluding them.

#include common-ref-enum with {
    enum: "`FilterType`",
    values: "`Include` and `Exclude`"
}

#####See Also#####
- [Filtering API](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#API)
- **columns[]**.[filterValues]({basewidgetpath}/Configuration/columns/#filterValues)
<!--/fullDescription-->