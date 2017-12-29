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

[note]Most browsers use Bing Maps V8, except Internet Explorer 9 and 10, which fall back to V7. 

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `GeoMapProvider` enum. This enum accepts the following values: `Bing`, `Google`, and `GoogleStatic`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/mapsmapmapmap/"
}
<!--/fullDescription-->