<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
opened: true
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_color_box">ui/color_box</a><!--/module-->
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
You can create the widget using one of the following approaches.

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
        [value]="rgba(255, 144, 0, 0.3)"
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

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorscolorboxcolorboxcolorbox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [ColorBox - Overview](/Documentation/Guide/Widgets/ColorBox/Overview/)
<!--/fullDescription-->