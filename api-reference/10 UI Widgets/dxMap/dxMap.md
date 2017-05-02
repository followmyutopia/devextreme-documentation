<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_map">ui/map</a><!--/module-->
<!--export-->default<!--/export-->
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

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->$(function () {
            $("#map").dxMap({
                provider: 'bing',
                type: 'roadmap',
                zoom: 10,
                center: "40.749825, -73.987963"
            });
        });

        <!--HTML-->
        <div id="map"></div>

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div dx-map="{
            provider: 'bing',
            type: 'roadmap',
            zoom: 10,
            center: '40.749825, -73.987963'
        }"></div>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxMap: {
            provider: 'bing',
            type: 'roadmap',
            zoom: 10,
            center: '40.749825, -73.987963'
        }"></div>

- [**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().Map()
            .ID("map")
            .Provider(GeoMapProvider.Bing)
            .Type(GeoMapType.Roadmap)
            .Zoom(10)
            .Center(40.749825, -73.987963)
        )

        <!--Razor VB-->@(Html.DevExtreme().Map() _
            .ID("map") _
            .Provider(GeoMapProvider.Bing) _
            .Type(GeoMapType.Roadmap) _
            .Zoom(10) _
            .Center(40.749825, -73.987963)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#####See Also#####
- [Map - Overview](/Documentation/Guide/Widgets/Map/Overview/)

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsmapmapmap/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->