<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Calendar widget.<!--/d-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_calendar">ui/calendar</a><!--/module-->
<!--inherits-->..\Editor\Editor.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Calendar** is a widget that displays a calendar and allows an end user to select the required date within a specified date range.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxCalendar` jQuery plug-in.

        <!--HTML-->
        <div id="calendar"></div>

    <!---->

        <!--JavaScript-->
        $("#calendar").dxCalendar({
            min: new Date(2000,1,1),
            max: new Date(2029,12,31),
            firstDayOfWeek: 0
        });

- **Knockout**  
 Add a div element and apply the `dxCalendar` binding to this element.

        <!--HTML-->
        <div data-bind="dxCalendar: {
            min: new Date(2000,1,1),
            max: new Date(2029,12,31),
            firstDayOfWeek: 0
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-calendar` directive to this element.

        <!--HTML-->
        <div dx-calendar="{
            min: new Date(2000,1,1),
            max: new Date(2029,12,31),
            firstDayOfWeek: 0
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find the detailed information on principles of working with the widget in the [dxCalendar section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxCalendar) of the [Editor Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorscalendarcalendarcalendar/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=qB6_tMJfEjQ&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=29" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>
<!--/fullDescription-->