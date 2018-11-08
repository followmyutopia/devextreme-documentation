===========================================================================
<!--default-->'html'<!--/default-->
<!--acceptValues-->'html' | 'markdown'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies in which markup language the [value](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/#value) is stored. 
<!--/shortDescription-->

<!--fullDescription-->
[note]

Markdown requires the [turndown](https://www.npmjs.com/package/turndown) and [showdown](https://www.npmjs.com/package/showdown) libraries. If you use browser scripts, link them before the DevExtreme scripts. If you use JavaScript modules, don't install the libraries; import the markdown converter instead:

    import "devextreme/ui/html_editor/converters/markdown";
    // or
    // require("ui/html_editor/converters/markdown");

[/note]

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/HtmlEditor/ValueTypes/jQuery/Light/"
}

#include common-ref-enum with {
    enum: "`HtmlEditorValueType`",
    values: "`Html` and `Markdown`"
}
<!--/fullDescription-->