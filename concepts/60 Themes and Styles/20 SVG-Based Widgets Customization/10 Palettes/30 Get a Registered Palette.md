Call the [DevExpress.viz.getPalette(paletteName)](/Documentation/ApiReference/Common/utils/viz/#getPalettepaletteName) method to get a registered [predefined](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#palette) or [custom palette](/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes/Implement_a_Custom_Palette). The method's description provides information about the structure of the returned object.

    <!--JavaScript-->
    var palette = DevExpress.viz.getPalette("Material");
    // ===== or when using modules =====
    import { getPalette } from "devextreme/viz/palette";
    
    let palette = getPalette("Material");
