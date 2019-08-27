---
id: viz.currentTheme(theme)
module: viz/themes
export: currentTheme
---
---
##### shortDescription
Changes the current theme for all data visualization widgets on the page.

##### param(theme): String
The new theme's name.

---
Only the widgets created after calling this method use the new theme. Use the [DevExpress.viz.refreshTheme()](/Documentation/ApiReference/Common/utils/viz/#refreshTheme) method to refresh the styling settings in other widgets.

#####See Also#####
- [Themes](/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Themes)
- [registerTheme(customTheme, baseTheme)](/Documentation/ApiReference/Common/utils/viz/#registerThemecustomTheme_baseTheme)