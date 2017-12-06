<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--handmade--><!--/handmade-->
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
This option should be assigned a function returning a specific object. The following fields can be specified in this object.

- **color**        
Specifies the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/tooltip/#color) of a tooltip.

- **text**        
Specifies the text displayed by a tooltip.

- **html**        
Specifies the HTML markup displayed by a tooltip.

    [note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

- **fontColor**        
Specifies the color of the text displayed by a tooltip.

- **borderColor**        
Specifies the color of the tooltip border.

When implementing a callback function for this option, you can access the main and target bullet values. For this purpose, use the following fields of the **this** object.

- **originalValue**    
Contains the primary bullet value as it is assigned to the **value** option.
- **value**   
Contains the primary bullet value with applied formatting if the **format** option is specified.
- **originalTarget**    
Contains the target bullet value as it is assigned to the **target** option.
- **target**   
Contains the target bullet value with applied formatting if the **format** option is specified.

The function's parameter represents the same object as the **this** object. If appropriate, you can use the function's parameter to obtain the main and target bullet values.

To get general information on data formatting, refer to the [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/) topic.
<!--/fullDescription-->