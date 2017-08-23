Major scale ticks can be accompanied by scale labels. These labels display scale values. Scale labels are designed to make data represented by the **CircularGauge** more comprehensible.

<img src="/Content/images/doc/17_2/ChartJS/CircularGaugeScaleLabels.png" alt="DevExtreme HTML5 JavaScript Gauges  CircularGaugeScaleLabels" style="display:block; margin:0 auto" />

To configure scale labels, use the options within the **scale**.[label](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/) object.

	<!--JavaScript-->var gaugeOptions = {
        scale: {
			label: {
				// ...
			}
        }
    };

These options are briefly described below.

- **Visibility**	
You can show/hide scale labels using the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/#visible) option.

- **Text Customization**	
You can specify a [format](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/#format) for the value displayed by a label. Moreover, you are not limited to displaying scale values only - you can customize the label's text per your requirements using the [customizeText](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/#customizeText) option.

- **Appearance**	
The font style used for displaying the label text can be varied using options of the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/font/) configuration object. In addition, scale labels can be indented from their ticks using the [indentFromTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/#indentFromTick) option.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/ScaleLabelFormatting/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>