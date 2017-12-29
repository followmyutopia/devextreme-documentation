===========================================================================
<!--default-->'Default'<!--/default-->
<!--acceptValues-->'Default' | 'Soft Pastel' | 'Harmony Light' | 'Pastel' | 'Bright' | 'Soft' | 'Ocean' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Soft Blue' | 'Dark Violet' | 'Green Mist'<!--/acceptValues-->
<!--type-->Array<String> | String<!--/type-->
===========================================================================

<!--shortDescription-->
Sets the name of the palette or an array of colors to be used for coloring the gauge range container.
<!--/shortDescription-->

<!--fullDescription-->
Use this option to set a predefined or custom palette. The colors listed in the specified palette will be used to draw bars. If the number of the bars is greater than the number of colors in the palette, palette colors are repeated, but slightly modified.

In addition, you can declare an array of colors and use it as a palette. Refer to the [Palettes](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) topic for more information on palettes.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), you can specify this option using the `VizPalette` enum. This enum accepts the following values: `Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet` and `GreenMist`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/gaugesbargaugesbargaugebasicelementspalette/"
}
<!--/fullDescription-->