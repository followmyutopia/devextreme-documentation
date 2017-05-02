<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: []
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_scheduler">ui/scheduler</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md,..\DataHelperMixin\DataHelperMixin.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Scheduler** is a widget that represents scheduled data and allows a user to manage and edit it.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->$(function () {
            $("#scheduler").dxScheduler({
                dataSource: [{
                    text: 'Meeting customers',
                    startDate: new Date(2015, 4, 10, 11, 0),
                    endDate: new Date(2015, 4, 10, 13, 0)
                }, {
                    text: 'Summing up the results',
                    startDate: new Date(2015, 4, 11, 12, 0),
                    endDate: new Date(2015, 4, 11, 13, 0)
                },
                // ...
                ],
                currentDate: new Date(2015, 4, 10),
                startDayHour: 8,
                endDayHour: 19
            });
        });

        <!--HTML-->
        <div id="scheduler">

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div dx-scheduler="{
            dataSource: [{
                text: 'Meeting customers',
                startDate: new Date(2015, 4, 10, 11, 0),
                endDate: new Date(2015, 4, 10, 13, 0)
            }, {
                text: 'Summing up the results',
                startDate: new Date(2015, 4, 11, 12, 0),
                endDate: new Date(2015, 4, 11, 13, 0)
            },
            // ...
            ],
            currentDate: new Date(2015, 4, 10),
            startDayHour: 8,
            endDayHour: 19
        }">
        </div>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxScheduler: {
            dataSource: [{
                text: 'Meeting customers',
                startDate: new Date(2015, 4, 10, 11, 0),
                endDate: new Date(2015, 4, 10, 13, 0)
            }, {
                text: 'Summing up the results',
                startDate: new Date(2015, 4, 11, 12, 0),
                endDate: new Date(2015, 4, 11, 13, 0)
            },
            // ...
            ],
            currentDate: new Date(2015, 4, 10),
            startDayHour: 8,
            endDayHour: 19
        }">
        </div>

- [**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().Scheduler()
            .ID("scheduler")
            .DataSource(new object[] {
                new {
                    text = "Meeting customers",
                    startDate = new DateTime(2015, 5, 10, 11, 0, 0),
                    endDate = new DateTime(2015, 5, 10, 13, 0, 0)
                },
                new {
                    text = "Summing up the results",
                    startDate = new DateTime(2015, 5, 11, 12, 0, 0),
                    endDate = new DateTime(2015, 5, 11, 13, 0, 0)
                },
                // ...
            })
            .CurrentDate(new DateTime(2015, 5, 10))
            .StartDayHour(8)
            .EndDayHour(19)
        )

        <!--Razor VB-->@(Html.DevExtreme().Scheduler() _
            .ID("scheduler") _
            .DataSource(New Object() {
                New With {
                    .text = "Meeting customers",
                    .startDate = new DateTime(2015, 5, 10, 11, 0, 0),
                    .endDate = new DateTime(2015, 5, 10, 13, 0, 0)
                },
                New With {
                    .text = "Summing up the results",
                    .startDate = new DateTime(2015, 5, 11, 12, 0, 0),
                    .endDate = new DateTime(2015, 5, 11, 13, 0, 0)
                }
            }) _
            .CurrentDate(New DateTime(2015, 5, 10)) _
            .StartDayHour(8) _
            .EndDayHour(19)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#####See Also#####
- [Scheduler - Overview](/Documentation/Guide/Widgets/Scheduler/Overview/)
- [Scheduler - Data Binding](/Documentation/Guide/Widgets/Scheduler/Data_Binding/)
- [Scheduler - Appointments](/Documentation/Guide/Widgets/Scheduler/Appointments/)
- [Scheduler - Resources](/Documentation/Guide/Widgets/Scheduler/Resources/)
- [Scheduler - Views](/Documentation/Guide/Widgets/Scheduler/Views/)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=evabB5-rZZ8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=52" class="button orange small fix-width-155" target="_blank">Watch Video</a>
<!--/fullDescription-->