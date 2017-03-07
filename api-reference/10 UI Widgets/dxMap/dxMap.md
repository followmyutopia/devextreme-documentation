<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Map widget.<!--/d-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_map">ui/map</a><!--/module-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Map** is an interactive widget that displays a geographic map with markers and routes.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxMap` jQuery plug-in.

        <!--HTML-->
        <div id="map"></div>

    <!---->

        <!--JavaScript-->
        $("#map").dxMap({
            provider: 'bing',
            type: 'roadmap',
            zoom: 10,
            center: "40.749825, -73.987963"
        });

- **Knockout**  
 Add a div element and apply the `dxMap` binding to this element.

        <!--HTML-->
        <div data-bind="dxMap: {
            provider: 'bing',
            type: 'roadmap',
            zoom: 10,
            center: '40.749825, -73.987963'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-map` directive to this element.

        <!--HTML-->
        <div dx-map="{
            provider: 'bing',
            type: 'roadmap',
            zoom: 10,
            center: '40.749825, -73.987963'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

For detailed information on working with the **Map** widget, refer to the [dxMap guide](/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxMap/).

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsmapmapmap/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->