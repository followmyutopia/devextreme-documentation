The range selector's scale is divided using two types of ticks: major and minor. Major ticks are accompanied with scale labels, while minor ticks are not.

![ChartJS RangeSelector](/Content/images/doc/16_1/ChartJS/RangeSelectorMajorTicks.png)

The appearance of the major ticks can be customized using the options of the [tick](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/tick/) object.

	<!--JavaScript-->
	var rangeSelectorOptions = {
		scale: {
		// ...
			tick: {
				color: 'white',
				opacity: 0.9,
				width: 2
			}
		}
	};

Major ticks can be arranged on the scale in several different ways. By default, major ticks arrange automatically with an interval that prevents [scale labels](/Documentation/Guide/Data_Visualization/RangeSelector/RangeSelector_Elements/#RangeSelector_RangeSelector_Elements_Scale_Scale_Labels) from overlapping. If you are not satisfied with major ticks arranged like that, you can specify a custom interval for the ticks using the [tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/tickInterval/) option.

[note] When you are specifying a custom tick interval, make sure the [useTicksAutoArrangement](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#useTicksAutoArrangement) option is set to *false*. If it is not, the specified tick interval may be ignored, but only if it leads to label overlap.

When you use a [date-time](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#valueType) scale, and its start value does not match the beginning of any date-time unit (hour, day, month, etc.), major ticks arrange differently depending on the value of the [setTicksAtUnitBeginning](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#setTicksAtUnitBeginning) option. The following table illustrates how this option impacts tick arrangement.

<div class="simple-table">
<table>
  <thead>
  <tr>
	<th rowspan="2">Scale Start Value</th>
	<th rowspan="2">Major Tick Interval</th>
	<th colspan="2">Major Ticks are Generated at</th>
  </tr>
  <tr>
    <td><i>setTicksAtUnitBeginning: true</i></th>
    <td><i>setTicksAtUnitBeginning: false</i></th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td >11h13min</td>
    <td >1 hour</td>
    <td >11h13min; 12h00min; 13h00min; ...</td>
	<td >11h13min; 12h13min; 13h13min; ...</td>
  </tr>
  <tr>
    <td >14d11h13min</td>
    <td >2 days</td>
    <td >14d11h13min; 16d00h00min; 18d00h00min; ...</td>
	<td >14d11h13min; 16d11h13min; 18d11h13min; ...</td>
  </tr>
  <tr>
    <td >1995y11m18d</td>
    <td >4 months</td>
    <td >1995y11m18d; 1996y03m01d; 1996y07m01d; ...</td>
	  <td>1995y11m18d; 1996y03m18d; 1996y07m18d; ...</td>
  </tr>
  </tbody>
</table>
</div>