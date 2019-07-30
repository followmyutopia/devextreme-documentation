<!--id-->dxVectorMap.Options.projection<!--/id-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->'mercator'<!--/default-->
<!--acceptValues-->'equirectangular' | 'lambert' | 'mercator' | 'miller'<!--/acceptValues-->
<!--type-->String | VectorMapProjectionConfig | Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the map projection. 
<!--/shortDescription-->

<!--fullDescription-->
Pass the object returned by the [projection(data)](/Documentation/ApiReference/Common/Utils/viz/map/Methods/#projectiondata) or [get(name)](/Documentation/ApiReference/Common/Utils/viz/map/Methods/#getname) method to this option.

#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/VectorMap/CustomProjection/jQuery/Light/",
    name: "Custom Projection"
}
#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/VectorMap/FloorPlan/jQuery/Light/",
    name: "Floor Plan"
}
<!--/fullDescription-->