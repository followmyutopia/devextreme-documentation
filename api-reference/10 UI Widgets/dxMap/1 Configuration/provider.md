===========================================================================
<!--default-->'google'<!--/default-->
<!--acceptValues-->'bing' | 'google' | 'googleStatic'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
The name of the current map data provider.
<!--/shortDescription-->

<!--fullDescription-->
Use the "googleStatic" provider to connect route points directly rather than by following the street layout.

#include common-ref-enum with {
    enum: "`GeoMapProvider`",
    values: "`Bing`, `Google`, and `GoogleStatic`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes/jQuery/Light/"
}
<!--/fullDescription-->