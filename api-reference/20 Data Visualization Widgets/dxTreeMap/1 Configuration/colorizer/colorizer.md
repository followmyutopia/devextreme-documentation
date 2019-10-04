---
id: dxTreeMap.Options.colorizer
type: Object
---
---
##### shortDescription
Manages the color settings.

---
There are several approaches to colorizing tiles.

 - Colorizing each tile uniquely into the [color specified directly](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#colorField) in the data object.      
 - Colorizing tiles using the colorizer.        
 - Specifying a single color for all tiles using the **tile**.[color](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/#color) option.    
 
If for some reason you cannot use the first approach, colorize tiles using the **colorizer** object. It offers three colorization algorithms: *"discrete"*, *"gradient"* and *"range"*. For more information on how to use each algorithm, refer to the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#type) option description.

To find out how else you can colorize tiles, see the [colorField](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#colorField) and **tile**.[color](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/#color) option descriptions.


#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/Colorization/jQuery/Light/"
}