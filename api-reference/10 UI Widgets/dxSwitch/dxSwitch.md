<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module-->ui/switch<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Editor\Editor.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Switch** is a widget that can be in two states: "On" and "Off".
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction with { }

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#switch").dxSwitch({
            value: true
        });
    });

    <!--HTML-->
    <div id="switch"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-switch [value]="true"></dx-switch>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-switch="{
        value: true
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxSwitch: {
        value: true
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Switch()
        .ID("switch")
        .Value(true)
    )

    <!--Razor VB-->@(Html.DevExtreme().Switch() _
        .ID("switch") _
        .Value(True)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editorsswitchswitchswitch/"
}

#####See Also#####
- [Switch - Overview](/Documentation/Guide/Widgets/Switch/Overview/)
<!--/fullDescription-->