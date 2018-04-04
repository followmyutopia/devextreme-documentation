===========================================================================
<!--default-->'Material'<!--/default-->
<!--acceptValues-->'Bright' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Default' | 'Green Mist' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Blue' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Material' | 'Office'<!--/acceptValues-->
<!--type-->Array<String> | String<!--/type-->
===========================================================================

<!--shortDescription-->
Sets the palette to be used to colorize tiles.
<!--/shortDescription-->

<!--fullDescription-->
#include dataviz-ref-palette

When implementing a custom palette, take into account the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#type) of a colorizer you use. The *"discrete"* type accepts an indefinite number of palette colors.

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

#####See Also#####
- [Palettes](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes)
- **colorizer**.[paletteExtensionMode]({basewidgetpath}/Configuration/colorizer/#paletteExtensionMode)
<!--/fullDescription-->