<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An object representing the Charts widget.<!--/d-->
<!--widgettree-->
dataSource: [{
    arg: "Russia",
    val: 12
}, {
    arg: "Canada",
    val: 7
}, {
    arg: "USA",
    val: 7
}, {
    arg: "China",
    val: 7
}, {
    arg: "Brazil",
    val: 6
}, {
    arg: "Australia",
    val: 5
}, {
    arg: "India",
    val: 2
}, {
    arg: "Others",
    val: 55
}]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_viz_pie_chart">viz/pie_chart</a><!--/module-->
<!--inherits-->..\BaseChart\BaseChart.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **PieChart** is a widget that visualizes data as a circle divided into sectors that each represents a portion of the whole.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxPieChart` jQuery plug-in.

        <!--HTML--><div id="chartContainer"></div>

    <!---->

        <!--JavaScript-->$("#chartContainer").dxPieChart({
			dataSource: dataSource,
			series: {
				argumentField: "country",
				valueField: "area"
			}
		});

- **Knockout**  
 Add a div element and apply the `dxPieChart` binding to this element.

        <!--HTML-->
        <div data-bind="dxPieChart: {
			dataSource: dataSource,
			series: {
				argumentField: 'country',
				valueField: 'area'
			}
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-pie-chart` directive to this element.

        <!--HTML-->
        <div dx-pie-chart="{
			dataSource: dataSource,
			series: {
				argumentField: 'country',
				valueField: 'area'
			}
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/Data_Visualization/Basics/Installation/) article.

To learn more about **PieChart**'s visual elements, refer to the <a href="/Documentation/16_1/Guide/Data_Visualization/Charts/PieChart_Elements">PieChart Elements</a> help article. To learn how to provide data for the **PieChart** widget, refer to the <a href="/Documentation/16_1/Guide/Data_Visualization/Charts/Data_Binding">Data Binding</a> article.

<a href="/Documentation/16_1/Tutorial/Data_Visualization/Configure_Charts" class="button orange small fix-width-155" style="margin-right: 20px;">Start Tutorial</a>
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartspieseriespie/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=qYkkyOzR9jc&index=14&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

#####See Also#####
- [Data Visualization Guides](/Documentation/Howto#datavisualization)
<!--/fullDescription-->