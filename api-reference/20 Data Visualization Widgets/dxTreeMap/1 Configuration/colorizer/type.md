<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'discrete' | 'gradient' | 'range' | 'none'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the colorizing algorithm.
<!--/shortDescription-->

<!--fullDescription-->
The **TreeMap** widget provides three algorithms for tile colorization: *"discrete"*, *"gradient"* and *"range"*.

The *"discrete"* algorithm is the simplest of all. It paints each tile within a group in a color taken from the [palette](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#palette). When there are several groups, colorization begins from scratch in each. Alternatively, you can force the widget to continue colorization across groups. For this purpose, set the [colorizeGroups](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#colorizeGroups) option to **true**. It will colorize not each tile, but each group of tiles in a single color taken from the palette.

If you choose the *"gradient"* algorithm, the palette should contain only two colors that will be used to colorize the smallest and the largest tile respectively. The other tiles will have a tint of either the first or the second color depending on their size. In order to use the *"gradient"* algorithm, you need to set the [range](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#range) option to an array of strictly two values. Tiles whose values fall out of the range will be painted in the color specified by the **tile**.[color](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/#color) option.

    <!--JavaScript-->var treeMapOptions = {
        colorizer: {
            // ...
            type: 'gradient',
            palette: ['red', 'blue'],
            range: [0, 1000]
        }
    };
    
The *"range"* algorithm is similar to *"gradient"*, but the array assigned to the **range** option should contain more than two values. For example, consider the following code.

    <!--JavaScript-->var treeMapOptions = {
        colorizer: {
            // ...
            type: 'range',
            palette: ['red', 'blue'],
            range: [0, 300, 700, 1000]
        }
    };
    
As a result, tile values will be split up into three ranges: 0 to 300, 300 to 700 and 700 to 1000. The palette of two colors will generate three tints - one for each range. Thus, tiles of the range 0 - 300 will be colored red, tiles of the range 700 - 1000 will be colored blue, and tiles of the range 300 - 700 - a color in between. Tiles whose values match neither range will be painted in the color specified by the **tile**.[color](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/#color) option.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), you can specify this option using the `TreeMapColorizerType` enum. This enum accepts the following values: `Discrete`, `Gradient`, `Range` and `None`.
<!--/fullDescription-->