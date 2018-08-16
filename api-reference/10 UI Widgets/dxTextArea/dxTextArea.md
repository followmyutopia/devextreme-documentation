<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module-->ui/text_area<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxTextBox\dxTextBox.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TextArea** is a widget that enables a user to enter and edit a multi-line text.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function() {
        $("#textArea").dxTextArea({
            placeholder: "Type a text here..."
        });
    });

    <!--HTML-->
    <div id="textArea"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-text-area placeholder="Type a text here..."></dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTextAreaModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-text-area="{
        placeholder: 'Type a text here...'
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxTextArea: {
        placeholder: 'Type a text here...'
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TextArea()
        .ID("textArea")
        .Placeholder("Type a text here...")
    )

    <!--Razor VB-->@(Html.DevExtreme().TextArea() _
        .ID("textArea") _
        .Placeholder("Type a text here...")
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editorstextareatextareatextarea/"
}

#####See Also#####
- [TextArea - Overview](/Documentation/Guide/Widgets/TextArea/Overview/)
<!--/fullDescription-->