---
id: BaseGauge.Options.rangeContainer.palette
acceptValues: 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office'
type: Array<String> | String
default: 'Material'
---
---
##### shortDescription
Specifies the palette to be used for colorizing ranges in the range container.

---
#include dataviz-ref-palette

#include common-ref-enum with {
    enum: "`VizPalette`",
    values: "`Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet`, and `GreenMist`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gauges/PaletteForRanges/jQuery/Light/"
}

#####See Also#####
- [Palettes](/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes)
- [paletteExtensionMode]({basewidgetpath}/Configuration/rangeContainer/#paletteExtensionMode)
- [DevExpress.viz.generateColors(palette, count, options)](/Documentation/ApiReference/Common/utils/viz/#generateColorspalette_count_options)
- **rangeContainer**.**ranges[]**.[color]({basewidgetpath}/Configuration/rangeContainer/ranges/#color)