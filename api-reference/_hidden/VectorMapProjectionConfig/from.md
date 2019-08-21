<!--id-->VectorMapProjectionConfig.from<!--/id-->
===========================================================================
<!--type-->function(coordinates)<!--/type-->
===========================================================================

<!--shortDescription-->
Converts coordinates from [x, y] to [lon, lat].
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/VectorMap/CustomProjection/jQuery/Light/"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->coordinates<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Array<Number><!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Two coordinates that represent a point in the widget coordinate system.    
Each coordinate ranges from -1 to 1.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Array<Number><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Two coordinates that represent the same point in the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource) coordinate system.
<!--/typeFunctionReturnDescription-->