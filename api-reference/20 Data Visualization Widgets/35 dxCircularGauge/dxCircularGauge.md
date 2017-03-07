<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An object representing circular gauges<!--/d-->
<!--widgettree-->
value: 48
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_viz_circular_gauge">viz/circular_gauge</a><!--/module-->
<!--inherits-->..\BaseGauge\BaseGauge.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **CircularGauge** is a widget that indicates values on a circular numeric scale.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxCircularGauge` jQuery plug-in.

        <!--HTML--><div id="gaugeContainer"></div>

    <!---->

        <!--JavaScript-->$("#gaugeContainer").dxCircularGauge({
			scale: {
				startValue: 50,
				endValue: 150,
				tickInterval: 10
			},	
			rangeContainer: {
				ranges: [
					{ startValue: 50, endValue: 90 },
					{ startValue: 90, endValue: 130 },
					{ startValue: 130, endValue: 150 }
				]
			},
			value: 105
		});

- **Knockout**  
 Add a div element and apply the `dxCircularGauge` binding to this element.

        <!--HTML-->
        <div data-bind="dxCircularGauge: {
			scale: {
				startValue: 50,
				endValue: 150,
				tickInterval: 10
			},	
			rangeContainer: {
				ranges: [
					{ startValue: 50, endValue: 90 },
					{ startValue: 90, endValue: 130 },
					{ startValue: 130, endValue: 150 }
				]
			},
			value: 105
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-circular-gauge` directive to this element.

        <!--HTML-->
        <div dx-circular-gauge="{
			scale: {
				startValue: 50,
				endValue: 150,
				tickInterval: 10
			},	
			rangeContainer: {
				ranges: [
					{ startValue: 50, endValue: 90 },
					{ startValue: 90, endValue: 130 },
					{ startValue: 130, endValue: 150 }
				]
			},
			value: 105
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/Data_Visualization/Basics/Installation/) article.

<a href="/Documentation/16_1/Tutorial/Data_Visualization/Configure_Gauges" class="button orange small fix-width-155" style="margin-right: 20px;">Start Tutorial</a>
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugescirculargaugescirculargaugebasicelementspaletteforranges/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=8rIBaB2RKvE&index=19&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

#####See Also#####
- [Data Visualization Guides](/Documentation/Howto#datavisualization)

<!--/fullDescription-->