<!--id-->dxDateBox.Options.type<!--/id-->
===========================================================================
<!--default-->'date'<!--/default-->
<!--acceptValues-->'date' | 'datetime' | 'time'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
A format used to display date/time information.
<!--/shortDescription-->

<!--fullDescription-->
You can assign the following values to this option:

- date - the widget displays only the date;
- time - the widget displays only the time;
- datetime - the widget displays both the date and time.

#include common-ref-enum with {
    enum: "`DateBoxType`",
    values: "`Date`, `DateTime`, and `Time`"
}
<!--/fullDescription-->