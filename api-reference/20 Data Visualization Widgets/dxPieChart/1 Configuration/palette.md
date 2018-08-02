===========================================================================
<!--default-->'Material'<!--/default-->
<!--acceptValues-->'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office'<!--/acceptValues-->
<!--type-->Array<String> | String<!--/type-->
===========================================================================

<!--shortDescription-->
Sets the palette to be used to colorize series and their elements.
<!--/shortDescription-->

<!--fullDescription-->
#include dataviz-ref-palette

#include common-ref-enum with {
    enum: "`VizPalette`",
    values: "`Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet`, and `GreenMist`"
}

#####See Also#####
- [Palettes](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes)
- [paletteExtensionMode]({basewidgetpath}/Configuration/#paletteExtensionMode)
- **series**.[color]({basewidgetpath}/Configuration/series/#color)
<!--/fullDescription-->