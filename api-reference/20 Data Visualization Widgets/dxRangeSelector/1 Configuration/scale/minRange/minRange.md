<!--id-->dxRangeSelector.Options.scale.minRange<!--/id-->
===========================================================================
<!--inherits-->..\..\..\..\VizTimeInterval\VizTimeInterval.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Specifies the minimum range that can be selected.
<!--/shortDescription-->

<!--fullDescription-->
Use this property to set the minimum range that can be selected. When moving a slider to a position near the other slider that is closer than the specified minimum range, the marker will display the last possible value that it can be set to, and change the font color to 'red'. You can set the color used to indicate an invalid range by using the **invalidRangeColor** property of the [sliderMarker](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/#invalidRangeColor) configuration object.

[note]For a [discrete scale](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#type), setting a minimum range is not an option. For a [semidiscrete scale](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#type), setting a minimum range is, conversely, required.

[note]The **minRange** property specifies the minimum range that can be selected in the UI. If you select a range in code, for example, using the [setValue(value)](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Methods/#setValuevalue) method, the **minRange** property will be ignored.

You can also set the maximum range that can be selected using the [maxRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/maxRange/) property.
<!--/fullDescription-->