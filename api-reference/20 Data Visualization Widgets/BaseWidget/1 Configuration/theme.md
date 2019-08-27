---
id: BaseWidget.Options.theme
acceptValues: 'generic.dark' | 'generic.light' | 'generic.contrast' | 'generic.carmine' | 'generic.darkmoon' | 'generic.darkviolet' | 'generic.greenmist' | 'generic.softblue' | 'material.blue.light' | 'material.lime.light' | 'material.orange.light' | 'material.purple.light' | 'material.teal.light'
type: String
default: 'generic.light'
---
---
##### shortDescription
Sets the name of the theme the widget uses.

---
A theme is a widget configuration that gives the widget a distinctive appearance. Use can use one of the [predefined themes](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) or create a [custom one](/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Themes). Changing the option values in the widget's configuration object overrides the theme's corresponding values.

[note]The following themes were deprecated or renamed: _'android5.light'_, *ios7.default*, _'win8.white'_, _'win8.black'_, _'win8.light'_, _'win8.dark'_, _'win10.white'_, _'win10.black'_, _'win10.light'_, _'win10.dark'_. In new applications, use themes listed in the accepted values.

#include common-ref-enum with {
    enum: "`VizTheme`",
    values: "`GenericLight`, `GenericDark`, `GenericContrast`, `GenericCarmine`, `GenericDarkMoon`, `GenericSoftBlue`, `GenericDarkViolet`, `GenericGreenMist`, `MaterialBlueLight`, `MaterialLimeLight`, `MaterialOrangeLight`, `MaterialPurpleLight`, `MaterialTealLight`"
}