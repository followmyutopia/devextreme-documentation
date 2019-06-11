<!--id-->Editor.Options.validationMessageMode<!--/id-->
===========================================================================
<!--default-->'auto'<!--/default-->
<!--acceptValues-->'always' | 'auto'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how the message about the [validation rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) that are not satisfied by this editor's value is displayed.
<!--/shortDescription-->

<!--fullDescription-->
The following option values are possible:

- **auto**  
The tooltip with the message is displayed when the editor is in focus.
- **always**  
The tooltip with the message is not hidden when the editor loses focus.

#include common-ref-enum with {
    enum: "`ValidationMessageMode`",
    values: "`Auto` and `Always`"
}
<!--/fullDescription-->