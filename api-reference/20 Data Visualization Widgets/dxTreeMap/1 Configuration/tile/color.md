<!--id-->dxTreeMap.Options.tile.color<!--/id-->
===========================================================================
<!--default-->'#$5f8b95'<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a single color for all tiles.
<!--/shortDescription-->

<!--fullDescription-->
There are several approaches to colorizing tiles.

 - Colorizing each tile uniquely into the [color specified directly](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#colorField) in the data object.      
 - Colorizing tiles using the [colorizer](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/).        
 - Specifying a single color for all tiles using the **tile**.**color** option.       

Use the latter approach only if you need to color all tiles uniformly. The **tile**.**color** option supports the following colors.

* Hexadecimal colors        
* RGB colors        
* RGBA colors       
* Predefined/cross-browser color names      
* [Predefined SVG colors](http://www.w3.org/TR/SVG/types.html#ColorKeywords)

This approach has the lowest priority among the others. To find more about the other two approaches, see the [colorField](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#colorField) and [colorizer](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/) option descriptions.
<!--/fullDescription-->