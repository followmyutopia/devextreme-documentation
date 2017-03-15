<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_slider">ui/slider</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxTrackBar\dxTrackBar.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Slider** is a widget that allows an end user to set a numeric value on a continuous range of possible values.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div id="slider"></div>

    <!---->

        <!--JavaScript-->$(function () {
            $("#slider").dxSlider({
                min: 0, max: 100,
                value: 25
            });
        });

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div dx-slider="{
            min: 0, max: 100,
            value: 25
        }"></div>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxSlider: {
            min: 0, max: 100,
            value: 25
        }"></div>

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().Slider()
            .ID("slider")
            .Min(0).Max(100)
            .Value(25)
        )

        <!--Razor VB-->@(Html.DevExtreme().Slider() _
            .ID("slider") _
            .Min(0).Max(100) _
            .Value(25)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeslidersliderslider/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Slider - Overview](/Documentation/Guide/Widgets/Slider/Overview/)
<!--/fullDescription-->