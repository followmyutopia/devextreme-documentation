<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Tooltip custom format and color function. Return object  {color: string; text:string}<!--/d-->
===========================================================================
<!--type-->function(pointInfo)<!--/type-->
<!--fp1d-->Defines the point value to be displayed in a tooltip.<!--/fp1d-->
<!--frd--> Specifies the text to be displayed in a tooltip and a color for the tooltip.<!--/frd-->
===========================================================================

<!--shortDescription-->
Allows you to change the appearance of specific tooltips.
<!--/shortDescription-->

<!--fullDescription-->
This option should be assigned a function returning a specific object. The following fields can be specified in this object.

- **color**		
Specifies the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/#color) of a tooltip.

- **text**		
Specifies the text displayed by a tooltip.

- **html**		
Specifies the HTML markup displayed by a tooltip.
[note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

- **fontColor**		
Specifies the color of the text displayed by a tooltip.

- **borderColor**		
Specifies the color of the tooltip border.

When implementing the function for this option, you can use information about the tooltip's point. For example, you can access the argument or value of this point. To do this, use the following fields of the **this** object.

* **value**   
Specifies the value of the currently hovered point.
* **valueText**   
Specifies the value of the currently hovered point with applied formatting if the **format** property is specified.
* **argument**   
Specifies the argument value of the currently hovered point.
* **argumentText**   
Specifies the argument value of the currently hovered point with applied formatting if the **argumentFormat** property is specified.
* **percent**     
Specifies the percent value of the currently hovered point.
* **percentText**    
Specifies the percent value of the currently hovered point with **percentPrecision** (optional) applied.
* **point**    
Provides access to the hovered point. To learn more about the field and methods of the point object, refer to the [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/) topic in the "Chart Elements" reference section.

The function's parameter represents the same object as the **this** object. If appropriate, you can use the function's parameter to obtain the value that is currently represented by a tooltip.

To get general information on data formatting, refer to the [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/) topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturestooltiphtmlsupport" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<!--/fullDescription-->
<!--typeFunctionParamName1-->pointInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Defines the point that is currently hovered over.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text or markup to be displayed in a tooltip, along with that tooltip's settings.
<!--/typeFunctionReturnDescription-->

<!--handmade-->
<!--/handmade-->