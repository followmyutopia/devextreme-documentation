<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module-->ui/number_box<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxTextEditor\dxTextEditor.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **NumberBox** is a widget that displays a numeric value and allows a user to modify it by typing in a value, and incrementing or decrementing it using the keyboard or mouse.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#numberBox").dxNumberBox({
            value: 20,
            min: 16,
            max: 100,
            placeholder: 'Enter your age'
        });
    });

    <!--HTML-->
    <div id="numberBox"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-number-box
        [value]="20"
        [min]="16"
        [max]="100"
        placeholder="Enter your age">
    </dx-number-box>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-number-box="{
        value: 20,
        min: 16,
        max: 100,
        placeholder: 'Enter your age'
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxNumberBox: {
        value: 20,
        min: 16,
        max: 100,
        placeholder: 'Enter your age'
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->@(Html.DevExtreme().NumberBox()
        .ID("numberBox")
        .Value(20)
        .Min(16)
        .Max(100)
        .Placeholder("Enter your age")
    )

    <!--Razor VB-->@(Html.DevExtreme().NumberBox() _
        .ID("numberBox") _
        .Value(20) _
        .Min(16) _
        .Max(100) _
        .Placeholder("Enter your age")
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editorsnumberboxnumberboxnumberbox/"
}

#####See Also#####
- [NumberBox - Overview](/Documentation/Guide/Widgets/NumberBox/Overview/)
<!--/fullDescription-->