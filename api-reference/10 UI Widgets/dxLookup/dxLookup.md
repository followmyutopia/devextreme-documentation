<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Lookup widget.<!--/d-->
<!--widgettree-->
dataSource: ["Prepare 2013 Financial","Prepare 3013 Marketing Plan","Update Personnel Files","Review Health Insurance Options Under the Affordable Care Act","Choose between PPO and HMO Health Plan",
    "Google AdWords Strategy","New Brochures","2013 Brochure Designs","Brochure Design Review","Website Re-Design Plan","Rollout of New Website and Marketing Brochures",
    "Update Sales Strategy Documents","Create 2012 Sales Report","Direct vs Online Sales Comparison Report"]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_lookup">ui/lookup</a><!--/module-->
<!--inherits-->..\dxDropDownList\dxDropDownList.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Lookup** is a widget that allows an end user to search for an item in a collection shown in a drop-down menu.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxLookup` jQuery plug-in.

        <!--HTML-->
        <div id="lookup"></div>

    <!---->

        <!--JavaScript-->
        $("#lookup").dxLookup({
            dataSource: lookupData,
            displayExpr: 'name',
            title: 'Lookup title',
            searchEnabled: true
        });

- **Knockout**  
 Add a div element and apply the `dxLookup` binding to this element.

        <!--HTML-->
        <div data-bind="dxLookup: {
            dataSource: lookupData,
            displayExpr: 'name',
            title: 'Lookup title',
            searchEnabled: true
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-lookup` directive to this element.

        <!--HTML-->
        <div dx-lookup="{
            dataSource: lookupData,
            displayExpr: 'name',
            title: 'Lookup title',
            searchEnabled: true
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

The **Lookup** widget supports common Collection Container, Editor, and Overlay widget functionality. Refer to the [Collection Container Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/), [Editor Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/) and [Overlay Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/) articles for details on using common functions. For detailed information on working with the **Lookup** widget, refer to the [dxLookup guide](/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxLookup/).

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistslookuplookuplookup/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->