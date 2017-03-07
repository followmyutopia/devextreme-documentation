<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
getPalette method
<!--/d-->
<!--p1d-->Palette name<!--/p1d-->
<!--rd-->Palettes<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Obtains the color sets of a predefined or registered palette.
<!--/shortDescription-->

<!--paramName1-->paletteName<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The palette name.
<!--/paramDescription1-->

<!--returnType-->object<!--/returnType-->
<!--returnDescription-->
The palette settings.
<!--/returnDescription-->

<!--fullDescription-->
The returned value is an object of the following structure.

	<!--JavaScript-->{
		simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], // for "Chart", "PieChart" and "BarGauge" 
		indicatingSet: ['#90ba58', '#eeba69', '#a37182'], // for "CircularGauge" and "LinearGauge"
		gradientSet: ['#78b6d9', '#eeba69'] // for "VectorMap"
	};

The built-in palettes are listed in the [Appearance Customization](/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes) topic.
<!--/fullDescription-->