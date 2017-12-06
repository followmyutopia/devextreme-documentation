===================================================================
<!--module-->viz/palette<!--/module-->
<!--export-->registerPalette<!--/export-->
===================================================================

<!--shortDescription-->
Registers a new palette.
<!--/shortDescription-->

<!--paramName1-->paletteName<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The new palette name.
<!--/paramDescription1-->

<!--paramName2-->palette<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
The new palette settings.
<!--/paramDescription2-->

<!--fullDescription-->
The palette settings is an object of the following structure.

    <!--JavaScript-->{
        simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], // for "Chart", "PieChart", "BarGauge", "Funnel",
                                                                            // and "TreeMap" with a gradient or range colorizer 
        indicatingSet: ['#90ba58', '#eeba69', '#a37182'], // for "CircularGauge" and "LinearGauge"
        gradientSet: ['#78b6d9', '#eeba69'] // for "VectorMap" and "TreeMap" with a gradient or range colorizer 
    }
<!--/fullDescription-->