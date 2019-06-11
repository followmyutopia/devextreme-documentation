<!--id-->viz.currentTheme(theme)<!--/id-->
===================================================================
<!--module-->viz/themes<!--/module-->
<!--export-->currentTheme<!--/export-->
===================================================================

<!--shortDescription-->
Changes the current theme for all data visualization widgets on the page.
<!--/shortDescription-->

<!--paramName1-->theme<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The new theme's name.
<!--/paramDescription1-->

<!--fullDescription-->
Only the widgets created after calling this method use the new theme. Use the [DevExpress.viz.refreshTheme()](/Documentation/ApiReference/Common/utils/viz/Methods/#refreshTheme) method to refresh the styling settings in other widgets.

#####See Also#####
- [Themes](/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Themes)
- [registerTheme(customTheme, baseTheme)](/Documentation/ApiReference/Common/utils/viz/Methods/#registerThemecustomTheme_baseTheme)
<!--/fullDescription-->