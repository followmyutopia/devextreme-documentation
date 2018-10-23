===========================================================================
<!--default-->'outlined', 'underlined' (Material)<!--/default-->
<!--acceptValues-->'outlined' | 'underlined' | 'filled'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how the widget's text field is styled.
<!--/shortDescription-->

<!--fullDescription-->
The following styles are available: 

![Text Editor Styling Modes](Content/images/doc/18_2/UiWidgets/textEditors_stylingMode.png)

#include common-ref-enum with {
    enum: "`EditorStylingMode`",
    values: "`Outlined`, `Underlined`, and `Filled`"
}

You can also use the global [editorStylingMode](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#editorStylingMode) setting to specify how the text fields of all editors in your application are styled.
<!--/fullDescription-->