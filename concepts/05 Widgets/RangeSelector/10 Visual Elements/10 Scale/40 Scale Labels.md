Each [major scale tick](/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/#Scale/Major_Scale_Ticks) is accompanied with a scale label. This label displays the value of the tick.

![ChartJS RangeSelector](/Content/images/doc/17_1/ChartJS/RangeSelectorScaleLabels.png)

To customize scale labels, use the options of the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/) configuration object.

	<!--JavaScript-->
	var rangeSelectorOptions = {
		scale: {
		// ...
			label: {
				// ...
			}
		}
	};
 
 A brief overview of the scale label options is given below.

- **Visibility**	
 By default, scale labels are visible. To hide them, set the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/#visible) option to *false*.

- **Text Customization**	
You can specify a [format](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/#format) for the value displayed by a label. Moreover, you are not limited to displaying the tick value only - you can customize the label's text per your requirements using the [customizeText](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/#customizeText) option.

- **Appearance**	
The font style used for displaying the label text can be varied using options of the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/font/) configuration object. In addition, scale labels can be indented from the scale itself using the [topIndent](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/#topIndent) option.
