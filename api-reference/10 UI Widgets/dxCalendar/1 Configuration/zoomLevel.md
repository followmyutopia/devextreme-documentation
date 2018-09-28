===========================================================================
<!--default-->'month'<!--/default-->
<!--acceptValues-->'century' | 'decade' | 'month' | 'year'<!--/acceptValues-->
<!--type-->String<!--/type-->
<!--firedEvents-->optionChanged<!--/firedEvents-->
===========================================================================

<!--shortDescription-->
Specifies the current calendar zoom level.
<!--/shortDescription-->

<!--fullDescription-->
Zoom level determines the size of a date range displayed on a single calendar page.

#include common-ref-enum with {
    enum: "`CalendarZoomLevel`",
    values: "`Month`, `Year`, `Decade`, and `Century`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Calendar/Overview/jQuery/Light/"
}

<!--/fullDescription-->