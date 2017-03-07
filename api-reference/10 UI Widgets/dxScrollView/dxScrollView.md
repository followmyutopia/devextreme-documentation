<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_scroll_view">ui/scroll_view</a><!--/module-->
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
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div id="scrollView">
            <div id="content"></div>
        </div>

    <!---->

        <!--JavaScript-->$(function() {
            $("#scrollView").dxScrollView({
                height: 500,
                width: 500,
                direction: 'both'
            });
        });

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div dx-scroll-view="{
            height: 500,
            width: 500,
            direction: 'both'
        }">
            <div id="content"></div>
        </div>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxScrollView: {
            height: 500,
            width: 500,
            direction: 'both'
        }">
            <div id="content"></div>
        </div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposescrollviewscrollviewscrollview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [ScrollView - Overview](/Documentation/Guide/Widgets/ScrollView/Overview/)
<!--/fullDescription-->