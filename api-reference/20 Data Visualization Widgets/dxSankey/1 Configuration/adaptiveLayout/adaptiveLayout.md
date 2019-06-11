<!--id-->dxSankey.Options.adaptiveLayout<!--/id-->
===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies adaptive layout options.
<!--/shortDescription-->

<!--fullDescription-->
The adaptive layout enables the widget to hide optional elements if they do not fit in the container. Elements are hidden in the following sequence:

1. [Title](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/title/)
1. [Export menu icon](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/export/)
1. [Labels](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/) (can be saved by setting the **adaptiveLayout**.[keepLabels](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/adaptiveLayout/#keepLabels) option to **true**)

Use the **height** and **width** options in the **adaptiveLayout** object to specify the minimum container size at which the layout begins to adapt.
<!--/fullDescription-->