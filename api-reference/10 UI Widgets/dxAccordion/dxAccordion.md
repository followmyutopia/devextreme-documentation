<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: [
{
    title: "Personal Data",
    text: "Name: John Smith, Birth Year: 1986",
},
{
    title: "Contacts",
    text: "Phone: (555)555-5555, Email: John.Smith@example.com",
}]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_accordion">ui/accordion</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Accordion** widget contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this widget very useful for presenting information in a limited amount of space.
<!--/shortDescription-->

<!--fullDescription-->
You can create the **Accordion** widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div id="accordion"></div>

    <!---->

        <!--JavaScript-->$(function () {
            $("#accordion").dxAccordion({
                dataSource: accordionData,
                collapsible: true,
                multiple: true
            });
        });
        
- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div dx-accordion="{
            dataSource: accordionData,
            collapsible: true,
            multiple: true
        }"></div>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxAccordion: {
            dataSource: accordionData,
            collapsible: true,
            multiple: true
        }"></div>

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().Accordion()
            .ID("accordion")
            .DataSource(AccordionData)
            .Collapsible(true)
            .Multiple(true)
        )

        <!--Razor VB-->@(Html.DevExtreme().Accordion() _
            .ID("accordion") _
            .DataSource(AccordionData) _
            .Collapsible(True) _
            .Multiple(True)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationaccordionaccordionaccordion/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=Dd0Nb6AU4B8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=45" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Accordion - Overview](/Documentation/Guide/Widgets/Accordion/Overview/)
<!--/fullDescription-->