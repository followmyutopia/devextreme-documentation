===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Manages the color settings.
<!--/shortDescription-->

<!--fullDescription-->
There are several approaches to colorizing tiles.

 - Colorizing each tile uniquely into the [color specified directly](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#colorField) in the data object.      
 - Colorizing tiles using the colorizer.        
 - Specifying a single color for all tiles using the **tile**.[color](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/#color) option.    
 
If for some reason you cannot use the first approach, colorize tiles using the **colorizer** object. It offers three colorization algorithms: *"discrete"*, *"gradient"* and *"range"*. For more information on how to use each algorithm, refer to the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#type) option description.

To find out how else you can colorize tiles, see the [colorField](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#colorField) and **tile**.[color](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/#color) option descriptions.


#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/Colorization/jQuery/Light/"
}
<a href="https://www.youtube.com/watch?v=xTyN69v7kWU&index=5&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>
<!--/fullDescription-->