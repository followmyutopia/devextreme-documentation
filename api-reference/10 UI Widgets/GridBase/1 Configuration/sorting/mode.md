<!--id-->GridBase.Options.sorting.mode<!--/id-->
===========================================================================
<!--default-->'single'<!--/default-->
<!--acceptValues-->'multiple' | 'none' | 'single'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the sorting mode.
<!--/shortDescription-->

<!--fullDescription-->
The following selection modes are available in the widget:

- **Single**        
Rows can be sorted by values of a single column only.

- **Multiple**      
Rows can be sorted by values of several columns.

#include common-ref-enum with {
    enum: "`GridSortingMode`",
    values: "`None`, `Single`, and `Multiple`"
}
<!--/fullDescription-->