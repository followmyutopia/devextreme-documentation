﻿You can display an image in the background of **RangeSelector**. To do this, use the options within the **background** | [image](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/background/image/) object. Specify the URL of the required image using the **url** option. Then, choose where to place this image on your range selector using the **location** option.

	<!--JavaScript-->
	var rangeSelectorOptions = {
		// ...
		background: {
			image: {
				url: '/Content/images/doc/17_1/ChartJS/flight.png',
				location: 'center'
			}
		}
	};

In case your image does not cover the whole range selector's background, [set up a color](/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/#Background/Setting_Up_a_Color) for the uncovered area using the **background** | **color** option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposerangeselectorrangeselectorimageonbackground/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
