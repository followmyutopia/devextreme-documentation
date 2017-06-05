<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_slide_out_view">ui/slide_out_view</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **SlideOutView** widget is a classic slide-out menu paired with a view.
<!--/shortDescription-->

<!--fullDescription-->
This widget is very similar to the [SlideOut](/Documentation/Guide/Widgets/SlideOut/Overview/) with only one difference - the **SlideOut** always contains the [List](/Documentation/Guide/Widgets/List/Overview/) in the slide-out menu, while the **SlideOutView** can hold any collection there.

You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div id="slideOutView">
        <div data-options="dxTemplate: { name: 'view' }">
            <p>View content</p>
        </div>
        <div data-options="dxTemplate: { name: 'menu' }">
            <p>Menu content</p>
        </div>
    </div>

    <!--JavaScript-->$(function () {
        $("#slideOutView").dxSlideOutView({
            contentTemplate: 'view',
            menuTemplate: 'menu',
        });
    });

    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-slide-out-view
        contentTemplate="view"
        menuTemplate="menu">
            <div *dxTemplate="let viewData of 'view'">
                <p>View content</p>
            </div>
            <div *dxTemplate="let menuData of 'menu'">
                <p>Menu content</p>
            </div>
    </dx-slide-out-view>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div id="slideOutView" dx-slide-out-view="{
        contentTemplate: 'view',
        menuTemplate: 'menu'
    }">
        <div data-options="dxTemplate: { name: 'view' }">
            <p>View content</p>
        </div>
        <div data-options="dxTemplate: { name: 'menu' }">
            <p>Menu content</p>
        </div>
    </div>

    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div id="slideOutView" data-bind="dxSlideOutView: {
        contentTemplate: 'view',
        menuTemplate: 'menu'
    }">
        <div data-options="dxTemplate: { name: 'view' }">
            <p>View content</p>
        </div>
        <div data-options="dxTemplate: { name: 'menu' }">
            <p>Menu content</p>
        </div>
    </div>

    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().SlideOutView()
        .ID("slideOutView")
        .ContentTemplate(@<text>
            <p>View content</p>
        </text>)
        .MenuTemplate(@<text>
            <p>Menu content</p>
        </text>)
    )

    <!--Razor VB-->@Code
        Html.DevExtreme().SlideOutView() _
            .ID("slideOutView") _
            .ContentTemplate(Sub()
                @<text>
                    <p>View content</p>
                </text>
            End Sub) _
            .MenuTemplate(Sub()
                @<text>
                    <p>Menu content</p>
                </text>
            End Sub).Render()
    End Code

    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#####See Also#####
- [SlideOutView - Overview](/Documentation/Guide/Widgets/SlideOutView/Overview/)
<!--/fullDescription-->