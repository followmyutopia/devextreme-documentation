<!--id-->VectorMapProjectionConfig.to<!--/id-->
===========================================================================
<!--type-->function(coordinates)<!--/type-->
===========================================================================

<!--shortDescription-->
Converts coordinates from [lon, lat] to [x, y].
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/VectorMap/CustomProjection/jQuery/Light/"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->coordinates<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Array<Number><!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Two coordinates that represent a point in the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource) coordinate system.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Array<Number><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Two coordinates that represent the same point in the widget coordinate system.    
Each coordinate should be in the range from -1 to 1.
<!--/typeFunctionReturnDescription-->
