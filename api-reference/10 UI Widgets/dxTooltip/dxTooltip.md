===========================================================================
<!--module-->ui/tooltip<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxPopover\dxPopover.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Tooltip** widget displays a tooltip for a specified element on the page.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div id="targetElement"></div>
    <div id="tooltip">
        <p>Tooltip content</p>
    </div>

    <!--JavaScript-->$(function () {
        $("#tooltip").dxTooltip({
            target: "#targetElement",
            showEvent: "dxhoverstart",
            hideEvent: "dxhoverend"
        });
    });

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div id="targetElement"></div>
    <dx-tooltip
        target="#targetElement"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend">
            <p>Tooltip content</p>
    </dx-tooltip>

    <!--TypeScript-->
    import { DxTooltipModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTooltipModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div id="targetElement"></div>
    <div dx-tooltip="{
        target: '#targetElement',
        showEvent: 'dxhoverstart',
        hideEvent: 'dxhoverend'
    }">
        <p>Tooltip content</p>
    </div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  


    <!--HTML-->
    <div id="targetElement"></div>
    <div data-bind="dxTooltip: {
        target: '#targetElement',
        showEvent: 'dxhoverstart',
        hideEvent: 'dxhoverend'
    }">
        <p>Tooltip content</p>
    </div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->@(Html.DevExtreme().Tooltip()
        .ID("tooltip")
        .Target("#targetElement")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(@<text>
            <p>Tooltip content</p>
        </text>)
    )
    <div id="targetElement"></div>

    <!--Razor VB-->@Code
        Html.DevExtreme().Tooltip() _
            .ID("tooltip") _
            .Target("#targetElement") _
            .ShowEvent("dxhoverstart") _
            .HideEvent("dxhoverend") _
            .ContentTemplate(Sub()
                @<text>
                    <p>Tooltip content</p>
                </text>
            End Sub).Render
    End Code
    <div id="targetElement"></div>

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogsandnotificationstooltiptooltiptooltip/"
}
<a href="http://www.youtube.com/watch?v=kb53tdJvcZA&index=32&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Tooltip - Overview](/Documentation/Guide/Widgets/Tooltip/Overview/)
<!--/fullDescription-->