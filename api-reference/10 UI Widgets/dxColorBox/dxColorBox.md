<!--widgettree-->
opened: true
<!--/widgettree-->
===========================================================================
<!--module-->ui/color_box<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxDropDownEditor\dxDropDownEditor.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ColorBox** is a widget that allows an end user to enter a color or pick it out from the drop-down editor.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#colorBox").dxColorBox({
            value: 'rgba(255, 144, 0, 0.3)',
            editAlphaChannel: true
        });
    });

    <!--HTML--><div id="colorBox"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-color-box
        value="rgba(255, 144, 0, 0.3)"
        [editAlphaChannel]="true">
    </dx-color-box>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div dx-color-box="{
        value: 'rgba(255, 144, 0, 0.3)',
        editAlphaChannel: true
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div data-bind="dxColorBox: {
        value: 'rgba(255, 144, 0, 0.3)',
        editAlphaChannel: true
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().ColorBox()
        .ID("colorBox")
        .Value("rgba(255, 144, 0, 0.3)")
        .EditAlphaChannel(true)
    )

    <!--Razor VB-->@(Html.DevExtreme().ColorBox() _
        .ID("colorBox") _
        .Value("rgba(255, 144, 0, 0.3)") _
        .EditAlphaChannel(True)
    )

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editorscolorboxcolorboxcolorbox/"
}

#####See Also#####
- [ColorBox - Overview](/Documentation/Guide/Widgets/ColorBox/Overview/)
<!--/fullDescription-->