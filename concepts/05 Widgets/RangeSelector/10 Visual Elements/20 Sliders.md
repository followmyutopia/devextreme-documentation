In the **RangeSelector** widget, sliders perform as the elements of control. By dragging them, you can select a range.

![ChartJS RangeSelector](/Content/images/doc/17_2/ChartJS/RangeSelectorSliders.png)

There are two sliders on a range selector: left and right. Each slider consists of a handle and a marker, whose appearance can be specified using the [sliderHandle](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderHandle/) and [sliderMarker](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/) configuration objects, respectively. The **sliderHandle** object does not have many options. You can change the color, opacity and width of slider handles using the corresponding fields of this object. In contrast, the **sliderMarker** object has more options. A brief overview of them is given below.

- **Visibility**	
Slider markers are displayed by default. To hide them, assign **false** to the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/#visible) option.

- **Text Customization**	
You can specify a [format](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/#format) for the values displayed by slider markers. Moreover, you are not limited to displaying only the values - you can customize the marker's text per your requirements using the [customizeText](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/#customizeText) option.

- **Appearance**	
The font style used for displaying marker text can be varied using options of the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/font/) configuration object. Also, you can change the distance between marker borders and its text using the [padding](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/#padding) option. In addition, you can specify a color for slider handles for times when the selected range falls out of the valid range specified by the [minRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/minRange/) and [maxRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/maxRange/) options. For this purpose, use the [invalidRangeColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/#invalidRangeColor) option.

- **Layout**	
When you must specify the exact height that a range selector should occupy, specify the [placeholderHeight](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/#placeholderHeight) and/or [indent](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/indent/) options.
