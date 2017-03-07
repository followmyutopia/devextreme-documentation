<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An object representing linear gauges<!--/d-->
<!--widgettree-->
value: 50
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_viz_linear_gauge">viz/linear_gauge</a><!--/module-->
<!--inherits-->..\BaseGauge\BaseGauge.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **LinearGauge** is a widget that indicates values on a linear numeric scale.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxLinearGauge` jQuery plug-in.

        <!--HTML--><div id="gaugeContainer"></div>

    <!---->

        <!--JavaScript-->$("#gaugeContainer").dxLinearGauge({
			scale: {
				startValue: 0,
				endValue: 5,
				tickInterval: 2.5
			},
			value: 4.3
		});

- **Knockout**  
 Add a div element and apply the `dxLinearGauge` binding to this element.

        <!--HTML-->
        <div data-bind="dxLinearGauge: {
			scale: {
				startValue: 0,
				endValue: 5,
				tickInterval: 2.5
			},
			value: 4.3
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-linear-gauge` directive to this element.

        <!--HTML-->
        <div dx-linear-gauge="{
			scale: {
				startValue: 0,
				endValue: 5,
				tickInterval: 2.5
			},
			value: 4.3
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/Data_Visualization/Basics/Installation/) article.

<a href="/Documentation/16_1/Tutorial/Data_Visualization/Configure_Gauges" class="button orange small fix-width-155" style="margin-right: 20px;">Start Tutorial</a>
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugeslineargaugeslineargaugebasicelementsscalecustomtickinterval/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=8rIBaB2RKvE&index=19&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

#####See Also#####
- [Data Visualization Guides](/Documentation/Howto#datavisualization)
<!--/fullDescription-->