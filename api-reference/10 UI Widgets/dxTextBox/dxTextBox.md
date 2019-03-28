<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module-->ui/text_box<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxTextEditor\dxTextEditor.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TextBox** is a widget that enables a user to enter and edit a single line of text.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->
    $(function() {
        $("#textBox").dxTextBox({
            placeholder: "Type a text here..."
        });
    });

    <!--HTML-->
    <div id="textBox"></div>

##### Angular

    <!--HTML-->
    <dx-text-box placeholder="Type a text here..."></dx-text-box>

    <!--TypeScript-->
    import { DxTextBoxModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-text-box="{
        placeholder: 'Type a text here...'
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxTextBox: {
        placeholder: 'Type a text here...'
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TextBox()
        .ID("textBox")
        .Placeholder("Type a text here...")
    )

    <!--Razor VB-->@(Html.DevExtreme().TextBox() _
        .ID("textBox") _
        .Placeholder("Type a text here...")
    )

##### React

    import React from 'react';
    import { TextBox } from 'devextreme-react/text-box';

    class App extends React.Component {
        render() {
            return (
                <TextBox
                    placeholder="Type a text here..."
                />
            );
        }
    }

    export default App;

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editorstextboxtextboxtextbox/"
}

#####See Also#####
- [TextBox - Overview](/Documentation/Guide/Widgets/TextBox/Overview/)
<!--/fullDescription-->