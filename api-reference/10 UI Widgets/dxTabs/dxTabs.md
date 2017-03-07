<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Tabs widget.<!--/d-->
<!--widgettree-->
dataSource: [
    { text: "Home", icon: "home" },
    { text: "About", icon: "info" }
]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_tabs">ui/tabs</a><!--/module-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Tabs** is a tab strip used to switch between pages or views. This widget is included in the [TabPanel](/Documentation/ApiReference/UI_Widgets/dxTabPanel/) widget, but you can use the **Tabs** separately as well.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxTabs` jQuery plug-in.

        <!--HTML-->
        <div id="tabs"></div>

    <!---->

        <!--JavaScript-->
        var tabItems = [
            { text: "Home", icon: "home" },
            { text: "About", icon: "info" }
        ]
        $("#tabs").dxTabs({
            dataSource: tabItems
        });

- **Knockout**  
 Add a div element and apply the `dxTabs` binding to this element.

        <!--HTML-->
        <div data-bind="dxTabs: {
            dataSource: tabItems
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-tabs` directive to this element.

        <!--HTML-->
        <div dx-tabs="{
            dataSource: tabItems
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

Since the **Tabs** widget is used to display multiple items, it supports common the Collection Container widget functionality. You can find detailed information on the principles of working with the widget in the [dxTabs section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxTabs) of the [Collection Container Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtabstabstabs/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->