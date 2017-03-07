<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
target: 30,
value: 20
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_2/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_viz_bullet">viz/bullet</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\BaseSparkline\BaseSparkline.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Bullet** widget is useful when you need to compare a single measure to a target value. The widget comprises a horizontal bar indicating the measure and a vertical line indicating the target value.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML--><div id="bullet"></div>

    <!---->

        <!--JavaScript-->$(function () {
			$("#bullet").dxBullet({
				startScaleValue: 0,
				endScaleValue: 35,
				value: 27,
				target: 24 
			});
		});

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div dx-bullet="{
			startScaleValue: 0,
			endScaleValue: 35,
			value: 27,
			target: 24
        }"></div>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxBullet: {
			startScaleValue: 0,
			endScaleValue: 35,
			value: 27,
			target: 24 
        }"></div>

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)
        
        @(Html.DevExtreme().Bullet()
            .ID("bullet")
            .StartScaleValue(0)
            .EndScaleValue(35)
            .Value(27)
            .Target(24)
		)

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartsbulletbulletssimplebullets/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=Ax5kgKvFKvs&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=22" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Bullet - Visual Elements](/Documentation/Guide/Widgets/Bullet/Visual_Elements/)
<!--/fullDescription-->