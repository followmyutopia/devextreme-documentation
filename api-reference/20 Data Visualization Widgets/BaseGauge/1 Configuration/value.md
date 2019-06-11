<!--id-->BaseGauge.Options.value<!--/id-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->undefined<!--/default-->
<!--type-->Number<!--/type-->
<!--firedEvents-->optionChanged<!--/firedEvents-->
===========================================================================

<!--shortDescription-->
Specifies the main value on a gauge.
<!--/shortDescription-->

<!--fullDescription-->
The main value is designated by the value indicator. To customize the appearance of the value indicator, use the **valueIndicator** configuration object.

You can obtain and change the gauge value at runtime. In order to do this, use the **value()** and **value(value)** methods.

Only one main value can be indicated on a gauge. Besides the main gauge value, you can indicate several extra values. Refer to the **subvalues** option description for more information.

#####See Also#####
- **Update Data Demo**: [CircularGauge](/Demos/WidgetsGallery/Demo/Gauges/UpdateCircularGaugeDataAtRuntime/jQuery/Light/) | [LinearGauge](/Demos/WidgetsGallery/Demo/Gauges/UpdateLinearGaugeDataAtRuntime/jQuery/Light/)
<!--/fullDescription-->