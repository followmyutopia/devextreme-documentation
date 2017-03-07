<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An object representing the Charts widget.<!--/d-->
<!--widgettree-->
dataSource: [{
    arg: "Monday",
    val: 3
}, {
    arg: "Tuesday",
    val: 2
}, {
    arg: "Wednesday",
    val: 3
}, {
    arg: "Thursday",
    val: 4
}, {
    arg: "Friday",
    val: 6
}, {
    arg: "Saturday",
    val: 11
}, {
    arg: "Sunday",
    val: 4
}]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_viz_chart">viz/chart</a><!--/module-->
<!--inherits-->..\BaseChart\BaseChart.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Chart** is a widget that visualizes data from a local or remote storage using a great variety of [series types](/Documentation/Guide/Data_Visualization/Charts/Chart_Series_Types/) along with different interactive elements, such as [tooltips](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Tooltips), [crosshair pointer](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Crosshair), [legend](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Legend), etc.
<!--/shortDescription-->

<!--fullDescription-->
You can create the **Chart** widget using one of the following approaches.

- **jQuery**  
 Use the `dxChart` jQuery plug-in.

        <!--HTML--><div id="chartContainer"></div>

    <!---->

        <!--JavaScript-->$("#chartContainer").dxChart({
			dataSource: dataSource,
			commonSeriesSettings: {
				argumentField: "state",
				type: "bar"
			},
			series: [
				{ valueField: "year2004", name: "2004" },
				{ valueField: "year2001", name: "2001" },
				{ valueField: "year1998", name: "1998" }
			]
		});

- **Knockout**  
 Add a `<div>` element and apply the `dxChart` binding to this element.

        <!--HTML-->
        <div data-bind="dxChart: {
			dataSource: dataSource,
			commonSeriesSettings: {
				argumentField: 'state',
				type: 'bar'
			},
			series: [
				{ valueField: 'year2004', name: '2004' },
				{ valueField: 'year2001', name: '2001' },
				{ valueField: 'year1998', name: '1998' }
			]
        }"></div>

- **AngularJS**  
 Add a `<div>` element and apply the `dx-chart` directive to this element.

        <!--HTML-->
        <div dx-chart="{
			dataSource: dataSource,
			commonSeriesSettings: {
				argumentField: 'state',
				type: 'bar'
			},
			series: [
				{ valueField: 'year2004', name: '2004' },
				{ valueField: 'year2001', name: '2001' },
				{ valueField: 'year1998', name: '1998' }
			]
        }"></div>

All DevExtreme widgets require linking the jQuery library. Linking the Knockout or AngularJS library is optional. For detailed information on how to link the needed libraries, refer to the [Installation](/Documentation/Guide/Data_Visualization/Basics/Installation/) article.

<a href="/Documentation/16_1/Tutorial/Data_Visualization/Configure_Charts" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Start Tutorial</a>
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsbarseriessimplestsingle/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Data Binding](/Documentation/Guide/Data_Visualization/Charts/Data_Binding/) - shows how to provide data for the **Chart** widget.
- [Chart Elements](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/) - provides an overview of visual elements present in the **Chart** widget.
<!--/fullDescription-->