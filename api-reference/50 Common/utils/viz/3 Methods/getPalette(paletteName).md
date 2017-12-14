===================================================================
<!--module-->viz/palette<!--/module-->
<!--export-->getPalette<!--/export-->
===================================================================

<!--shortDescription-->
Obtains the color sets of a predefined or registered palette.
<!--/shortDescription-->

<!--paramName1-->paletteName<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The palette name.
<!--/paramDescription1-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
The palette settings.
<!--/returnDescription-->

<!--fullDescription-->
The returned value is an object of the following structure.

    <!--JavaScript-->{
        simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], // for "Chart", "PieChart", "BarGauge", "Funnel",
                                                                            // and "TreeMap" with a gradient or range colorizer 
        indicatingSet: ['#90ba58', '#eeba69', '#a37182'], // for "CircularGauge" and "LinearGauge"
        gradientSet: ['#78b6d9', '#eeba69'] // for "VectorMap" and "TreeMap" with a gradient or range colorizer 
    }

The built-in palettes are listed in the [Appearance Customization](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) topic.
<!--/fullDescription-->