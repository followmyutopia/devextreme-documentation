<!--id-->dxHtmlEditor<!--/id-->
<!--widgettree-->
valueType: "html",
value: "This is <b>HtmlEditor</b>.<br/>Select text and use a toolbar control.",
toolbar: {
    items: ["bold", "italic", "color", "background", "link",
    {
        formatName: "header",
        formatValues: [1, 2, 3, false]
    }, "variable"
    ]
},
variables: {
    dataSource: [ "FirstName", "LastName", "Company" ],
    escapeChar: [ "{", "}" ]
}
<!--/widgettree-->
===========================================================================
<!--module-->ui/html_editor<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->Editor<!--/inherits-->
===========================================================================

<!--shortDescription-->
[tags] ctp

**HtmlEditor** is a WYSIWYG text editor build on top of <a href="https://quilljs.com/" target="_blank">Quill</a>, designed to support HTML and Markdown output formats.

#include common-ctp-note with {
    component: "HtmlEditor"
}
<!--/shortDescription-->

<!--fullDescription-->
[note] The **HtmlEditor** requires the <a href="https://www.npmjs.com/package/quill" target="_blank">Quill</a> library.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/jQuery/Light/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/HtmlEditor/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->