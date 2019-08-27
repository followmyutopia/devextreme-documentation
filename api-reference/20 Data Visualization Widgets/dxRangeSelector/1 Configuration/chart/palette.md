---
id: dxRangeSelector.Options.chart.palette
acceptValues: 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office'
type: Array<String> | String
default: 'Material'
---
---
##### shortDescription
Sets the palette to be used to colorize series in the chart.

---
#include dataviz-ref-palette

#include common-ref-enum with {
    enum: "`VizPalette`",
    values: "`Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet`, and `GreenMist`"
}

#####See Also#####
- [Palettes](/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes)
- [DevExpress.viz.generateColors(palette, count, options)](/Documentation/ApiReference/Common/utils/viz/#generateColorspalette_count_options)
- **chart**.[paletteExtensionMode]({basewidgetpath}/Configuration/chart/#paletteExtensionMode)