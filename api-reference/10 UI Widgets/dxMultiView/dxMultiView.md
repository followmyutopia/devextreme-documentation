<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->MultiView widget.<!--/d-->
<!--widgettree-->
dataSource: [
    { text: "Super Mart of the West" },
    { text: "Electronics Depot" },
    { text: "Tom's Club" }
],
height: 300,
loop: true
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_multi_view">ui/multi_view</a><!--/module-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **MultiView** is a widget that contains several views. An end user navigates through the views by swiping them in the horizontal direction. 
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxMultiView` jQuery plug-in.

        <!--HTML-->
        <div id="multiView"></div>

    <!---->

        <!--JavaScript-->
        $("#multiView").dxMultiView({
            dataSource: multiViewData,
            selectedIndex: 0
        });

- **Knockout**  
 Add a div element and apply the `dxMultiView` binding to this element.

        <!--HTML-->
        <div data-bind="dxMultiView: {
            dataSource: multiViewData,
            selectedIndex: 0
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-multi-view` directive to this element.

        <!--HTML-->
        <div dx-multi-view="{
            dataSource: multiViewData,
            selectedIndex: 0
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

Since the **MultiView** widget is used to display multiple items, it supports the common Collection Container widget functionality. You can find detailed information on the principles of working with the widget in the [dxMultiView section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxMultiView) of the [Collection Container Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationmultiviewmultiviewmultiview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->