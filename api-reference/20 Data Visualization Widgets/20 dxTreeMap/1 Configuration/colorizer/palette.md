<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Palette<!--/d-->
===========================================================================
<!--default-->'Default'<!--/default-->
<!--acceptValues-->'Default' | 'Soft Pastel' | 'Harmony Light' | 'Pastel' | 'Bright' | 'Soft' | 'Ocean' | 'Vintage' | 'Violet'<!--/acceptValues-->
<!--type-->array | string<!--/type-->
===========================================================================

<!--shortDescription-->
Sets the palette to be used for colorizing tiles.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts either the name of a [predefined palette](/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes) or an array of colors. The array can include the following colors.

* Hexadecimal colors        
* RGB colors        
* RGBA colors       
* Predefined/cross-browser color names      
* [Predefined SVG colors](http://www.w3.org/TR/SVG/types.html#ColorKeywords)

If the number of tiles is greater than the number of colors in the palette, the colors are repeated with slight modification.

When implementing a custom palette, take into account the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#type) of a colorizer you use. The *"discrete"* type accepts an indefinite number of colors in the palette.

    <!--JavaScript-->var treeMapOptions = {
        colorizer: {
            // ...
            type: 'discrete',
            palette: ['red', 'blue', 'green', 'yellow', ...]    
        }
    }

But the *"gradient"* and *"range"* types require strictly two colors.

    <!--JavaScript-->var treeMapOptions = {
        colorizer: {
            // ...
            type: 'gradient',
            palette: ['red', 'blue'],
            range: [0, 1000]
        }
    }
<!--/fullDescription-->