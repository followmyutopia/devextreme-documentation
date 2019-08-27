---
id: globalConfig.editorStylingMode
acceptValues: 'outlined' | 'underlined' | 'filled'
type: String
default: undefined
---
---
##### shortDescription
Specifies how editors' text fields are styled in your application.

---
The following styles are available: 

![Text Editor Styling Modes](Content/images/doc/19_2/UiWidgets/textEditors_stylingMode.png)

    <!--JavaScript-->DevExpress.config({ 
        editorStylingMode: 'filled' // or 'outlined' | 'underlined'
    });

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Common/StylingMode/jQuery/Light/"
}