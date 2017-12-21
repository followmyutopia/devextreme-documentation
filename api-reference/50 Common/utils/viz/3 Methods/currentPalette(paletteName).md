===================================================================
<!--module-->viz/palette<!--/module-->
<!--export-->currentPalette<!--/export-->
===================================================================

<!--shortDescription-->
Changes the current palette for all data visualization widgets on the page.
<!--/shortDescription-->

<!--paramName1-->paletteName<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
A new palette's name.
<!--/paramDescription1-->

<!--fullDescription-->
Only the widgets created after calling this method use the new palette. Refresh the styling settings in other widgets using the [DevExpress.viz.refreshTheme()](/Documentation/ApiReference/Common/utils/viz/Methods/#refreshTheme) method.

#####See Also#####
- [DevExpress.viz.registerPalette(paletteName, palette)](/Documentation/ApiReference/Common/utils/viz/Methods/#registerPalettepaletteName_palette)
<!--/fullDescription-->