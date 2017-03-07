<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->dxScheduler widget<!--/d-->
<!--widgettree-->
dataSource: []
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_scheduler">ui/scheduler</a><!--/module-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Scheduler** is a widget that represents scheduled data and allows a user to manage and edit it.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxScheduler` jQuery plug-in.

        <!--HTML-->
        <div id="scheduler">

    <!---->

        <!--JavaScript-->
        $("#scheduler").dxScheduler({
            dataSource: schedulerDataSource
        });

- **Knockout**  
 Add a div element and apply the `dxScheduler` binding to this element.

        <!--HTML-->
        <div data-bind="dxScheduler: {
            dataSource: schedulerDataSource
        }">
        </div>

- **AngularJS**  
 Add a div element and apply the `dx-scheduler` directive to this element.

        <!--HTML-->
        <div dx-scheduler="{
            dataSource: schedulerDataSource
        }">
        </div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

The [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource) option takes on an array of appointment objects, as well as the [DataSource](/Documentation/Guide/Data_Layer/Data_Layer/) object that requests appointment data from the associated [Store](/Documentation/Guide/Data_Layer/Data_Source_Examples/) (local, OData or a custom one). The appointment objects loaded to the widget's data source may have a [particular set of fields](/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/) that allow the widget to use a [default appointment template](/Documentation/Guide/UI_Widgets/Scheduler/Visual_Elements/#Appointment). In case of custom data source fields, you can define a custom template for displaying appointments.

#####See Also#####
- [Customize Item Template](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)
- [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/)


Refer to the **Scheduler** [UI Widgets guides](/Documentation/Guide/#uiwidgets) for more information on working with the **Scheduler** widget.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeschedulerschedulerscheduler" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=evabB5-rZZ8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=52" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

<!--/fullDescription-->