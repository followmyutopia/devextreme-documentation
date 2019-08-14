<!--id-->dxFunnel.Options.palette<!--/id-->
===========================================================================
<!--default-->'Material'<!--/default-->
<!--acceptValues-->'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office'<!--/acceptValues-->
<!--type-->Array<String> | String<!--/type-->
===========================================================================

<!--shortDescription-->
Sets the palette to be used to colorize funnel items.
<!--/shortDescription-->

<!--fullDescription-->
#include dataviz-ref-palette

#include common-ref-enum with {
    enum: "`VizPalette`",
    values: "`Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet`, and `GreenMist`"
}

#####See Also#####
- [Palettes](/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes)
- [paletteExtensionMode]({basewidgetpath}/Configuration/#paletteExtensionMode)
- [DevExpress.viz.generateColors(palette, count, options)](/Documentation/ApiReference/Common/utils/viz/#generateColorspalette_count_options)
- [colorField](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#colorField)
<!--/fullDescription-->