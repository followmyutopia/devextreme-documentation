<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An object representing vector map<!--/d-->
<!--widgettree-->
layers: [{
    type: 'area',
    dataSource: '/Content/data/vectorMap-sources/world.txt'
}]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_viz_vector_map">viz/vector_map</a><!--/module-->
<!--inherits-->..\BaseWidget\BaseWidget.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **VectorMap** is a widget that visualize geographical locations. This widget represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxVectorMap` jQuery plug-in.

        <!--HTML--><div id="mapContainer"></div>

    <!---->

        <!--JavaScript-->$("#mapContainer").dxVectorMap({
			layers: [{
				type: 'area',
				dataSource: DevExpress.viz.map.sources.world
			}],
			//...
		});

- **Knockout**  
 Add a div element and apply the `dxVectorMap` binding to this element.

        <!--HTML-->
        <div data-bind="dxVectorMap: {
			layers: [{
				type: 'area',
				dataSource: DevExpress.viz.map.sources.world
			}],
			//...
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-vector-map` directive to this element.

        <!--HTML-->
        <div dx-vector-map="{
			layers: [{
				type: 'area',
				dataSource: DevExpress.viz.map.sources.world
			}],
			//...
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/Data_Visualization/Basics/Installation/) article.

<a href="/Documentation/16_1/Tutorial/Data_Visualization/Configure_VectorMap" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Start Tutorial</a>
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapcolorscustomization/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=A2jKKWJq2Kk&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=23" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

#####See Also#####
- [Data Visualization Guides](/Documentation/Howto#datavisualization)

<!--/fullDescription-->