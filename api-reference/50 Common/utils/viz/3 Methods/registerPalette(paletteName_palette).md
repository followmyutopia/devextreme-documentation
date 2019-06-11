<!--id-->viz.registerPalette(paletteName, palette)<!--/id-->
===================================================================
<!--module-->viz/palette<!--/module-->
<!--export-->registerPalette<!--/export-->
===================================================================

<!--shortDescription-->
Registers a new palette.
<!--/shortDescription-->

<!--paramName1-->paletteName<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The palette's name.
<!--/paramDescription1-->

<!--paramName2-->palette<!--/paramName2-->
<!--paramType2-->Object<!--/paramType2-->
<!--paramDescription2-->
The palette's settings.
<!--/paramDescription2-->

<!--fullDescription-->
The palette settings is an object of the following structure:

    <!--JavaScript-->{
        // Applies in the BarGauge, Chart, Funnel, PieChart, PolarChart, Sankey, and TreeMap with a discrete colorizer
        simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], 
        // Applies in the CircularGauge and LinearGauge
        indicatingSet: ['#90ba58', '#eeba69', '#a37182'], 
        // Applies in the VectorMap and TreeMap with a gradient or range colorizer 
        gradientSet: ['#78b6d9', '#eeba69'] 
    }
<!--/fullDescription-->