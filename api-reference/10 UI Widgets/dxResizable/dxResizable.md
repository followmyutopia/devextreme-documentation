===========================================================================
<!--module-->ui/resizable<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\DOMComponent\DOMComponent.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Resizable** widget enables its content to be resizable in the UI.
<!--/shortDescription-->

<!--fullDescription-->
The **Resizable** widget is an element that can be resized by an end user. It displays data located inside the HTML element of the widget. You can specify minimum and maximum size using the [minHeight](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#minHeight), [minWidth](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#minWidth), [maxHeight](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#maxHeight) and [maxWidth](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#maxWidth) options. The [handles](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#handles) option enables you to specify which element borders are used as a handle for resizing.

You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function() {
        $("#resizable").dxResizable({
            width: 200,
            height: 200,
            minWidth: 30,
            minHeight: 30,
            maxWidth: 500,
            maxHeight: 500 
        });
    });

    <!--HTML-->
    <div id="resizable">
        <div id="content"></div>
    </div>

    <!--CSS-->#content {
        height: 100%;
        width: 100%
    }

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-resizable
        [width]="200"
        [height]="200"
        [minWidth]="30"
        [minHeight]="30"
        [maxWidth]="500"
        [maxHeight]="500">
            <div id="content"></div>
    </dx-resizable>

    <!--CSS-->#content {
        height: 100%;
        width: 100%
    }


#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-resizable="{
        width: 200,
        height: 200,
        minWidth: 30,
        minHeight: 30,
        maxWidth: 500,
        maxHeight: 500 
    }">
        <div id="content"></div>
    </div>

    <!--CSS-->#content {
        height: 100%;
        width: 100%
    }

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxResizable: {
        width: 200,
        height: 200,
        minWidth: 30,
        minHeight: 30,
        maxWidth: 500,
        maxHeight: 500 
    }">
        <div id="content"></div>
    </div>

    <!--CSS-->#content {
        height: 100%;
        width: 100%
    }

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Resizable()
        .ID("resizable")
        .Width(200)
        .Height(200)
        .MinWidth(30)
        .MinHeight(30)
        .MaxWidth(500)
        .MaxHeight(500)
        .Content(@<text>
            <div id="content"></div>
        </text>)
    )

    <!--Razor VB-->@Code
        Html.DevExtreme().Resizable() _
            .ID("resizable") _
            .Width(200) _
            .Height(200) _
            .MinWidth(30) _
            .MinHeight(30) _
            .MaxWidth(500) _
            .MaxHeight(500) _
            .Content(Sub()
                @<text>
                    <div id="content"></div>
                </text>
            End Sub).Render()
    End Code

    <!--CSS-->#content {
        height: 100%;
        width: 100%
    }

---

Note that DevExtreme widgets require linking the jQuery library to your application. The Knockout or AngularJS library is also needed if you use the Knockout or AngularJS approach. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#####See Also#####
- [Resizable - Overview](/Documentation/Guide/Widgets/Resizable/Overview/)

<!--/fullDescription-->