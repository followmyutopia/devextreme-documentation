===========================================================================
<!--default-->'roadmap'<!--/default-->
<!--acceptValues-->'hybrid' | 'roadmap' | 'satellite'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
The type of a map to display.
<!--/shortDescription-->

<!--fullDescription-->
The available option values are based on map types supported by the Google map provider. If you use the Bing map, the widget casts the option value to the appropriate value supported by the "Bing" provider.

- hybrid -> Aerial
- roadmap -> Road

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `GeoMapType` enum. This enum accepts the following values: `Hybrid`, `Roadmap` and `Satellite`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes/jQuery/Light/"
}
<!--/fullDescription-->