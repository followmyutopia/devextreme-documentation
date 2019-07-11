<!--id-->dxPopover<!--/id-->
===========================================================================
<!--module-->ui/popover<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->dxPopup<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Popover** is a widget that shows notifications within a box with an arrow pointing to a specified UI element.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--HTML--><div id="targetElement"></div>
    <div id="popover">
        <p>Popover content</p>
    </div>

    <!--JavaScript-->$(function () {
        $("#popover").dxPopover({
            target: "#targetElement",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend'
        });
    });

##### Angular

    <!--HTML-->
    <div id="targetElement"></div>
    <dx-popover
        target="#targetElement"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend">
        <div *dxTemplate="let data of 'content'">
            <p>Popover content</p>
        </div>
    </dx-popover>

    <!--TypeScript-->
    import { DxPopoverModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPopoverModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div id="targetElement"></div>
    <div dx-popover="{
        target: '#targetElement',
        showEvent: 'dxhoverstart',
        hideEvent: 'dxhoverend'
    }">
        <p>Popover content</p>
    </div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div id="targetElement"></div>
    <div data-bind="dxPopover: {
        target: '#targetElement',
        showEvent: 'dxhoverstart',
        hideEvent: 'dxhoverend'
    }">
        <p>Popover content</p>
    </div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->@(Html.DevExtreme().Popover()
        .ID("popover")
        .Target("#targetElement")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(@<text>
            <p>Popover content</p>
        </text>)
    )
    <div id="targetElement"></div>

    <!--Razor VB-->@Code
        Html.DevExtreme().Popover() _
            .ID("popover") _
            .Target("#targetElement") _
            .ShowEvent("dxhoverstart") _
            .HideEvent("dxhoverend") _
            .ContentTemplate(Sub()
                @<text>
                    <p>Popover content</p>
                </text>
            End Sub).Render()
    End Code
    <div id="targetElement"></div>

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogsandnotificationspopoverpopoverpopover/"
}
<a href="http://www.youtube.com/watch?v=JZHRrQxqs7Y&index=9&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Popover - Overview](/Documentation/Guide/Widgets/Popover/Overview/)
<!--/fullDescription-->