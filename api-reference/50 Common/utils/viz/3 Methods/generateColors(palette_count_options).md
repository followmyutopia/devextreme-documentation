===================================================================
<!--module-->viz/palette<!--/module-->
<!--export-->generateColors<!--/export-->
===================================================================

<!--shortDescription-->
Returns a subset of palette colors.
<!--/shortDescription-->

<!--paramName1-->palette<!--/paramName1-->
<!--paramType1-->Enums_VizPalette|Array<String><!--/paramType1-->
<!--paramDescription1-->
A palette name or an array of colors. See [palette](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#palette) for more information.
<!--/paramDescription1-->

<!--paramName2-->count<!--/paramName2-->
<!--paramType2-->Number<!--/paramType2-->
<!--paramDescription2-->
The number of colors in the resulting subset.
<!--/paramDescription2-->

<!--paramName3-->options<!--/paramName3-->
<!--paramType3-->Object<!--/paramType3-->
<!--paramDescription3-->
Optional settings.
<!--/paramDescription3-->
<!--paramName3_field1-->paletteExtensionMode<!--/paramName3_field1-->
<!--paramType3_field1-->'alternate' | 'blend' | 'extrapolate'<!--/paramType3_field1-->
<!--paramDescription3_field1-->
The mode in which the palette should be extended when it contains less colors than specified in the **count** parameter. The default value is *"blend"*.    
See [paletteExtensionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#paletteExtensionMode) for more information.
<!--/paramDescription3_field1-->
<!--paramName3_field2-->baseColorSet<!--/paramName3_field2-->
<!--paramType3_field2-->'simpleSet' | 'indicatingSet' | 'gradientSet'<!--/paramType3_field2-->
<!--paramDescription3_field2-->
The color set that provides the colors. The default value is *"simpleSet"*.        
See [getPalette(paletteName)](/Documentation/ApiReference/Common/utils/viz/Methods/#getPalettepaletteName) for more information.
<!--/paramDescription3_field2-->

<!--returnType-->Array<String><!--/returnType-->
<!--returnDescription-->
Colors in hexadecimal format.
<!--/returnDescription-->

<!--fullDescription-->
The following code generates ten colors from the Material palette's gradient color set:

    <!--JavaScript-->
    var colors = DevExpress.viz.generateColors('Material', 10, { baseColorSet: 'gradientSet' });
    // ===== or when using modules =====
    import { generateColors } from 'devextreme/viz/palette';
     
    let colors = generateColors('Material', 10, { baseColorSet: 'gradientSet' });

Use the generated colors to paint elements of different widgets in identical colors. For instance, you can assign the same colors to series in two different charts to indicate the visualized information is connected.
<!--/fullDescription-->
