===========================================================================
<!--default-->'change'<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies one or several [DOM events](https://en.wikipedia.org/wiki/DOM_events) after which the widget's [value]({basewidgetpath}/Configuration/#value) should be updated. Applies only if [acceptCustomValue]({basewidgetpath}/Configuration/#acceptCustomValue) is set to **true**.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts a single event name or several names separated by spaces.

The recommended events are "keyup", "blur", "change", and "focusout", but you can use other events as well.
<!--/fullDescription-->