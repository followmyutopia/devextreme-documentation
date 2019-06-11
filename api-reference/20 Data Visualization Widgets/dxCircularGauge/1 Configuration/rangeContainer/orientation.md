<!--id-->dxCircularGauge.Options.rangeContainer.orientation<!--/id-->
===========================================================================
<!--default-->'outside'<!--/default-->
<!--acceptValues-->'center' | 'inside' | 'outside'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the orientation of the range container in the **CircularGauge** widget.
<!--/shortDescription-->

<!--fullDescription-->
This property specifies the range container's orientation relative to the invisible scale line.

When setting up a range container, apply the required orientation first to check that the result responds to your needs. Then, set the required **offset** from the invisible scale line to shift the range container.

#include common-ref-enum with {
    enum: "`CircularGaugeElementOrientation`",
    values: "`Outside`, `Inside`, and `Center`"
}
<!--/fullDescription-->