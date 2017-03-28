A constant line is a straght line that extends over the entire **Chart** and indicates an axis value. Constant lines are always perpendicular to the axis to which they belong. 

![DevExtreme HTML5 JavaScript Charts ConstantLines](/Content/images/doc/16_2/ChartJS/visual_elements/constant_lines.png)

To configure the constant lines, declare the [constantLines](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLines/) array in the [argumentAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/) or [valueAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/) object. This array should contain objects, and each one of them configures a single constant line. A constant line demands at least the [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLines/#value) option to be set. 

	<!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			argumentAxis: {
				constantLines: [
					{ value: 100 },
					{ value: 50 }
				]
			},
            valueAxis: {
				constantLines: [
					{ value: 40 },
					{ value: 70 }
				]
			}
        });
    });

If several constant lines should have a uniform style, you can specify it using one of the following objects.

- **argumentAxis** | [constantLineStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLineStyle/) 		
Style for constant lines belonging to the argument axis.

- **valueAxis** | [constantLineStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/constantLineStyle/) 		
Style for constant lines belonging to the value axis.

- **commonAxisSettings** | [constantLineStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/constantLineStyle/) 		
Style for all constant lines in the **Chart**.

Note that individual settings override axis-specific settings which, in turn, override common settings.

	<!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			argumentAxis: {
				constantLines: [
					// high priority
				],
				constantLineStyle: {
					// middle priority
				}
			},
            valueAxis: {
				constantLines: [
					// high priority
				],
				constantLineStyle: {
					// middle priority
				}
			},
			commonAxisSettings: {
				constantLineStyle: {
					// low priority
				}
			}
        });
    });

For information about all options of the constant lines, visit the [constantLines](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLines/) section of the API reference.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ServerSideDataProcessing/Knockout/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [Grid](/Documentation/Guide/Widgets/Chart/Grid/)
- [Strips](/Documentation/Guide/Widgets/Chart/Strips/)

[tags]chart, constant lines
