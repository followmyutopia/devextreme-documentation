<!--widgettree-->
layers: [{
    type: 'area',
    dataSource: '/Content/data/vectorMap-sources/world.txt'
}]
<!--/widgettree-->
===========================================================================
<!--module-->viz/vector_map<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\BaseWidget\BaseWidget.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **VectorMap** is a widget that visualizes geographical locations. This widget represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function() {
        $("#vectorMap").dxVectorMap({
            layers: [{
                type: 'area',
                dataSource: DevExpress.viz.map.sources.world,
                label: {
                    enabled: true,
                    dataField: 'name'
                }
            }]
        });
    });

    <!--HTML--><div id="vectorMap"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-vector-map>
        <dxi-layer
            type="area"
            [dataSource]="DevExpress.viz.map.sources.world">
            <dxo-label
                [enabled]="true"
                dataField="name">
            </dxo-label>
        </dxi-layer>
    </dx-vector-map>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-vector-map="{
        layers: [{
            type: 'area',
            dataSource: DevExpress.viz.map.sources.world,
            label: {
                enabled: true,
                dataField: 'name'
            }
        }]
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxVectorMap: {
        layers: [{
            type: 'area',
            dataSource: DevExpress.viz.map.sources.world,
            label: {
                enabled: true,
                dataField: 'name'
            }
        }],
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().VectorMap()
        .Layers(layers => {
            layers.Add()
                .DataSource(new JS("DevExpress.viz.map.sources.world"))
                .Label(l => l
                    .Enabled(true)
                    .DataField("name")
                );
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().VectorMap() _
        .Layers(Sub(layers)
            layers.Add() _
                .DataSource(New JS("DevExpress.viz.map.sources.world")) _
                .Label(Sub(l)
                    l.Enabled(true) _
                        .DataField("name")
                End Sub)
        End Sub)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/mapsvectormapvectormapcolorscustomization/"
}
<a href="http://www.youtube.com/watch?v=A2jKKWJq2Kk&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=23" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [VectorMap - Visual Elements](/Documentation/Guide/Widgets/VectorMap/Visual_Elements/)
- [VectorMap - Providing Data](/Documentation/Guide/Widgets/VectorMap/Providing_Data/)
- [VectorMap - End-User Interaction](/Documentation/Guide/Widgets/VectorMap/End-User_Interaction/)
<!--/fullDescription-->