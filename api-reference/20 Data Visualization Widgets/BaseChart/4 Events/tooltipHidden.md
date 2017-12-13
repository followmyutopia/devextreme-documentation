===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when a point's tooltip becomes hidden.
<!--/shortDescription-->

<!--fullDescription-->
The point's tooltip becomes invisible when a user hovers the mouse cursor over another series point. In addition, you can hide a tooltip in code, using the **hideTooltip()** method of the chart or point.

When a tooltip is made hidden, you can perform specific actions by handling the **tooltipHidden** event. When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the series point whose tooltip becomes hidden.

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->target<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->basePointObject<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The series point whose tooltip is hidden; described in the [Point]({basewidgetpath}/Chart_Elements/Point/) section.
<!--/typeFunctionParamDescription1_field4-->
