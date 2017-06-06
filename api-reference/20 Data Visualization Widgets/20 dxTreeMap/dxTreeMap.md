<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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
<!--module-->viz/tree_map<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\BaseWidget\BaseWidget.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TreeMap** is a widget that displays hierarchical data by using nested rectangles.
<!--/shortDescription-->

<!--fullDescription-->
In the **TreeMap** widget, hierarchical data is represented by a set of nested rectangles whose sizes are proportional to the visualized values. **TreeMap** operates with plain and hierarchical [data sources](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource). Also, it can visualize a hierarchy reconstructed from a flat data source.

**TreeMap** provides three [layout algorithms](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#layoutAlgorithm) out-of-the-box along with the capability to implement your own algorithm. In addition, the widget includes API methods that enable you to implement the [drill down](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#drillDown) feature. Moreover, **TreeMap** supports all interactive features available in other DevExtreme Data Visualization Widgets: [click](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#click), [hover](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#hoverChanged) and [selection](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#selectionChanged).

You can create the **TreeMap** widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->var fruitsVegetables = [{
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
    }];
    $(function() {
        $("#treeMap").dxTreeMap({
            dataSource: fruitsVegetables
        });
    });

    <!--HTML--><div id="treeMap"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-tree-map [dataSource]="fruitsVegetables"></dx-tree-map>

    <!--JavaScript-->
    export class AppComponent {
        fruitsVegetables = [
            // ...   
        ];
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tree-map="{
            dataSource: fruitsVegetables
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.fruitsVegetables = [
                // ...   
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxTreeMap: {
        dataSource: fruitsVegetables
    }"></div>

    <!--JavaScript-->var viewModel = {
        fruitsVegetables: [
            // ...
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TreeMap()
        .ID("treeMap")
        .DataSource(FruitsVegetables)
    )

    <!--Razor VB-->@(Html.DevExtreme().TreeMap() _
        .ID("treeMap") _
        .DataSource(FruitsVegetables)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/charts-tree_map-hierarchical_data_structure" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=xTyN69v7kWU&index=5&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [TreeMap - dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)
<!--/fullDescription-->