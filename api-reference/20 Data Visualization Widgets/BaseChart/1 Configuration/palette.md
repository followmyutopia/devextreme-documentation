===========================================================================
<!--default-->'Default'<!--/default-->
<!--acceptValues-->'Default' | 'Soft Pastel' | 'Harmony Light' | 'Pastel' | 'Bright' | 'Soft' | 'Ocean' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Soft Blue' | 'Dark Violet' | 'Green Mist'<!--/acceptValues-->
<!--type-->Array<String> | String<!--/type-->
===========================================================================

<!--shortDescription-->
Sets the name of the palette to be used in the chart. Alternatively, an array of colors can be set as a custom palette to be used within this chart.
<!--/shortDescription-->

<!--fullDescription-->
Use this property to set a predefined or custom palette. The colors listed in the specified palette will be used to draw chart series, their points, labels and tooltips. If the number of a series is greater than the number of colors in the palette, palette colors are repeated, but slightly modified.

You can override the color of individual series and their points, labels and tooltips by setting the **color** property of the corresponding object. In addition, you can define a custom palette to use in your charts. To learn how to do this, refer to the [Palettes](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) topic.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), you can specify this option using the `VizPalette` enum. This enum accepts the following values: `Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet` and `GreenMist`.
<!--/fullDescription-->