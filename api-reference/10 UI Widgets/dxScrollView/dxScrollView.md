===========================================================================
<!--module-->ui/scroll_view<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxScrollable\dxScrollable.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ScrollView** is a widget that enables a user to scroll its content.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction with { WidgetName: "ScrollView" }

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function() {
        $("#scrollView").dxScrollView({
            height: 500,
            width: 500,
            direction: 'both'
        });
    });

    <!--HTML-->
    <div id="scrollView">
        <div id="content"></div>
    </div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-scroll-view
        [height]="500"
        [width]="500"
        direction="both">
            <div id="content"></div>
    </dx-scroll-view>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-scroll-view="{
        height: 500,
        width: 500,
        direction: 'both'
    }">
        <div id="content"></div>
    </div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxScrollView: {
        height: 500,
        width: 500,
        direction: 'both'
    }">
        <div id="content"></div>
    </div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().ScrollView()
        .ID("scrollView")
        .Height(500)
        .Width(500)
        .Direction(ScrollDirection.Both)
        .Content(@<text>
            <div id="content"></div>
        </text>)
    )

    <!--Razor VB-->@Code
        Html.DevExtreme().ScrollView() _
            .ID("scrollView") _
            .Height(500) _
            .Width(500) _
            .Direction(ScrollDirection.Both) _
            .Content(Sub()
                @<text>
                    <div id="content"></div>
                </text>
            End Sub).Render()
    End Code

---

Note that DevExtreme widgets require linking the jQuery library to your application. The Knockout or AngularJS library is also needed if you use the Knockout or AngularJS approach. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/formsandmulti-purposescrollviewscrollviewscrollview/"
}

#####See Also#####
- [ScrollView - Overview](/Documentation/Guide/Widgets/ScrollView/Overview/)
<!--/fullDescription-->