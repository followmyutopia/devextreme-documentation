<!--id-->globalConfig.editorStylingMode<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'outlined' | 'underlined' | 'filled'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how editors' text fields are styled in your application.
<!--/shortDescription-->

<!--fullDescription-->
The following styles are available: 

![Text Editor Styling Modes](Content/images/doc/19_2/UiWidgets/textEditors_stylingMode.png)

    <!--JavaScript-->DevExpress.config({ 
        editorStylingMode: 'filled' // or 'outlined' | 'underlined'
    });

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Common/StylingMode/jQuery/Light/"
}
<!--/fullDescription-->