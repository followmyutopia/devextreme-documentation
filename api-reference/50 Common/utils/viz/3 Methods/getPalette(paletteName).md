===================================================================
<!--module-->viz/palette<!--/module-->
<!--export-->getPalette<!--/export-->
===================================================================

<!--shortDescription-->
Gets the color sets of a predefined or registered palette.
<!--/shortDescription-->

<!--paramName1-->paletteName<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The palette's name.
<!--/paramDescription1-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
The palette's settings.
<!--/returnDescription-->

<!--fullDescription-->
The returned value is an object of the following structure:

    <!--JavaScript-->{
        // Applies in the BarGauge, Chart, Funnel, PieChart, PolarChart, Sankey, and TreeMap with a discrete colorizer
        simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], 
        // Applies in the CircularGauge and LinearGauge
        indicatingSet: ['#90ba58', '#eeba69', '#a37182'], 
        // Applies in the VectorMap and TreeMap with a gradient or range colorizer 
        gradientSet: ['#78b6d9', '#eeba69'] 
    }

The built-in palettes are listed in the [Appearance Customization](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) topic.
<!--/fullDescription-->