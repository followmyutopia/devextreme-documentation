<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An object representing vector map<!--/d-->
<!--widgettree-->
dataSource: [{
    name: 'Fruits',
    items: [
        { name: 'Apples', value: 4 },
        { name: 'Oranges', value: 10 },
        { name: 'Lemons', value: 6 }
    ]
}, {
    name: 'Vegetables',
    items: [
        { name: 'Cucumbers', value: 4 },
        { name: 'Tomatoes', value: 8 },
        { name: 'Turnips', value: 7 }
    ]
}]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_viz_tree_map">viz/tree_map</a><!--/module-->
<!--inherits-->..\BaseWidget\BaseWidget.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TreeMap** is a widget that displays hierarchical data by using nested rectangles.
<!--/shortDescription-->

<!--fullDescription-->
In the **TreeMap** widget, hierarchical data is represented by a set of nested rectangles whose sizes are proportional to the visualized values. **TreeMap** operates with flat and hierarchical [data sources](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource). Also, it can visualize a hierarchy reconstructed from a flat data source.

**TreeMap** provides three [layout algorithms](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#layoutAlgorithm) out-of-the-box along with the capability to implement your own algorithm. In addition, the widget includes API methods that enable you to implement the [drill down](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#drillDown) feature. Moreover, **TreeMap** supports all interactive features available in other DevExtreme Data Visualization Widgets: [click](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#click), [hover](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#hoverChanged) and [selection](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#selectionChanged).

You can create the **TreeMap** widget using one of the following approaches.

- **jQuery**  
 Use the `dxTreeMap` jQuery plug-in.

        <!--HTML--><div id="treeMapContainer"></div>

    <!---->

        <!--JavaScript-->$("#treeMapContainer").dxTreeMap({
			dataSource: data,
            labelField: 'text',
            valueField: 'val'
		});

- **Knockout**  
 Add a div element and apply `dxTreeMap` binding to this element.

        <!--HTML-->
        <div data-bind="dxTreeMap: {
			dataSource: data,
            labelField: 'text',
            valueField: 'val'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-tree-map` directive to this element.

        <!--HTML-->
        <div dx-tree-map="{
			dataSource: data,
            labelField: 'text',
            valueField: 'val'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/Data_Visualization/Basics/Installation/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/charts-tree_map-hierarchical_data_structure" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=xTyN69v7kWU&index=5&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>
<!--/fullDescription-->