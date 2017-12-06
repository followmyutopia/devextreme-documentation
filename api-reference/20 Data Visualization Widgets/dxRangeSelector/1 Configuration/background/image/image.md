===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies image options.
<!--/shortDescription-->

<!--fullDescription-->
You can display an image as the background of a range selector instead of the default color. Set the image's URL and location using the corresponding properties of the **image** object to do this.

The width of the specified image must be less than or equal to the widget's [width](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/size/#width).

The height of the specified image must be less than or equal to the following value ("-" stands for subtract): *the widget's [height](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/size/#height)* - *the scale's [placeholderHeight](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#placeholderHeight)*.

If the image size is smaller than the background size, a default background color will be displayed in the remaining area. You can set a custom color (e.g. an empty color) for the background using the **color** property of the **background** configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposerangeselectorrangeselectorimageonbackground/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->