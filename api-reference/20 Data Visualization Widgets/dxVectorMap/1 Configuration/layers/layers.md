===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->undefined<!--/default-->
<!--type-->Array<Object> | Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies options for **VectorMap** widget layers.
<!--/shortDescription-->

<!--fullDescription-->
The vector map may contain several different layers. Each layer can be of *"area"*, *"line"* or *"marker"* [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#type).

The [Z-order](https://en.wikipedia.org/wiki/Z-order) of layers depends on their order in the **layers** array in the following way: the first layer occupies the background, the last layer is brought to the foreground.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Vector_Map/MultipleLayers/jQuery/Light/"
}
<!--/fullDescription-->