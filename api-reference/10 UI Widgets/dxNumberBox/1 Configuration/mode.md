<!--id-->dxNumberBox.Options.mode<!--/id-->
===========================================================================
<!--default-->'text', 'number' (mobile_devices)<!--/default-->
<!--acceptValues-->'number' | 'text' | 'tel'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the value to be passed to the [type](http://www.w3schools.com/tags/att_input_type.asp) attribute of the underlying `<input>` element.
<!--/shortDescription-->

<!--fullDescription-->
[note] If you set the [format](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#format) option, the **mode** for mobile devices is changed to *"tel"*; *"number"* is not available.

#include common-ref-enum with {
    enum: "`NumberBoxMode`",
    values: "`Text`, `Number`, and `Tel`"
}
<!--/fullDescription-->