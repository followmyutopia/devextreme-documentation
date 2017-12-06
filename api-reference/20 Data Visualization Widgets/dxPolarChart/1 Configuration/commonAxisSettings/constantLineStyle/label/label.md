===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
An object defining constant line label options.
<!--/shortDescription-->

<!--fullDescription-->
A constant line label shows information on the constant line. Use the **label** object to configure all the constant line labels simultaneously. Within this object you can set font options, a position and text using corresponding fields.

To specify styles for the constant line labels of the argument and value axis separately, use the **argumentAxis**.**constantLineStyle**.[label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/constantLineStyle/label/) or **valueAxis**.**constantLineStyle**.[label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/constantLineStyle/label/) configuration object correspondingly. Note that the options that are set within these objects override the corresponding options that are set within the **commonAxisSettings**.**constantLineStyle**.**label** object.

In addition, you can define the appearance of each constant line label individually. For more information, refer to the **argumentAxis**.**constantLines**.[label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/constantLines/label/) or **valueAxis**.**constantLines**.[label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/constantLines/label/) object description.
<!--/fullDescription-->