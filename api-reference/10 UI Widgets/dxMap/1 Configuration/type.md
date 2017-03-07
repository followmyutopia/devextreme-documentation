<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'roadmap'<!--/default-->
<!--acceptValues-->'hybrid' | 'roadmap' | 'satellite'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
The type of a map to display.
<!--/shortDescription-->

<!--fullDescription-->
The available option values are based on map types supported by the Google map provider. If you use the Bing map, the widget casts the option value to the appropriate value supported by the "Bing" provider.

- hybrid -> Aerial
- roadmap -> Road

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `GeoMapType` enum. This enum accepts the following values: `Hybrid`, `Roadmap` and `Satellite`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsmapmapmap/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->