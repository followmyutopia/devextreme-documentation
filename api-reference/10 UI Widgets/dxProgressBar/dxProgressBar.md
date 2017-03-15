<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_progress_bar">ui/progress_bar</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxTrackBar\dxTrackBar.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ProgressBar** is a widget that shows current progress.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div id="progressBar"></div>

    <!---->

        <!--JavaScript-->$(function () {
            $("#progressBar").dxProgressBar({
                min: 0,
                max: 100,
                value: 49
            });
        });

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div dx-progress-bar="{
            min: 0,
            max: 100,
            value: 49
        }"></div>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxProgressBar: {
            min: 0,
            max: 100,
            value: 49
        }"></div>

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().ProgressBar()
            .ID("progressBar")
            .Min(0)
            .Max(100)
            .Value(49)
        )

        <!--Razor VB-->@(Html.DevExtreme().ProgressBar() _
            .ID("progressBar") _
            .Min(0) _
            .Max(100) _
            .Value(49)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsprogressbarprogressbarprogressbar/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [ProgressBar - Overview](/Documentation/Guide/Widgets/ProgressBar/Overview/)
<!--/fullDescription-->