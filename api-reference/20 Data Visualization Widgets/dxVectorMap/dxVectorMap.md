<!--id-->dxVectorMap<!--/id-->
<!--widgettree-->
layers: [{
    type: 'area',
    dataSource: '/Content/data/vectorMap-sources/world.txt'
}]
<!--/widgettree-->
===========================================================================
<!--module-->viz/vector_map<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->BaseWidget<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **VectorMap** is a widget that visualizes geographical locations. This widget represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/mapsvectormapvectormapcolorscustomization/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/VectorMap/Visual_Elements/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->