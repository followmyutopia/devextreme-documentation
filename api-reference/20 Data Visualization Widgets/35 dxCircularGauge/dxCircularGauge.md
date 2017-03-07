<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
value: 48
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_2/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_viz_circular_gauge">viz/circular_gauge</a><!--/module-->
<!--export-->default<!--/export-->
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

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML--><div id="circularGauge"></div>

    <!---->

        <!--JavaScript-->$(function () {
			$("#circularGauge").dxCircularGauge({
				scale: {
					startValue: 50,
					endValue: 150
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
		});

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div dx-circular-gauge="{
			scale: {
				startValue: 50,
				endValue: 150
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

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxCircularGauge: {
			scale: {
				startValue: 50,
				endValue: 150
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

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)
        
        @(Html.DevExtreme().CircularGauge()
            .ID("circularGauge")
            .Scale(scale => scale
                .StartValue(50)
                .EndValue(50)
            )
            .RangeContainer(rc => rc
                .Ranges(ranges =>
                {
                    ranges.Add().StartValue(50).EndValue(90);
                    ranges.Add().StartValue(90).EndValue(130);
                    ranges.Add().StartValue(130).EndValue(150);
                })
            )
		)

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="/Documentation/16_2/Tutorial/Data_Visualization/Configure_Gauges" class="button orange small fix-width-155" style="margin-right:5px;">Start Tutorial</a>
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugescirculargaugescirculargaugebasicelementspaletteforranges/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=8rIBaB2RKvE&index=19&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [CircularGauge - Visual Elements](/Documentation/Guide/Widgets/CircularGauge/Visual_Elements/)
<!--/fullDescription-->