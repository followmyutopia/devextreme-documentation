<!--id-->dxChartSeriesTypes.CommonSeries.label.argumentFormat<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->format<!--/type-->
===========================================================================

<!--shortDescription-->
Formats the point argument before it is displayed in the point label. To format the point value, use the [format](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/#format) option.
<!--/shortDescription-->

<!--fullDescription-->
A point label displays only the point value by default. Using the **label**.[customizeText](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/#customizeText) option, you can instruct the label to display the point argument as well. The **argumentFormat** option applies in this case only. This option accepts an object whose fields are described in the [format](/Documentation/ApiReference/Common/Object_Structures/format/) section.

[note]DevExtreme widgets provide a wide choice of [predefined formats](/Documentation/ApiReference/Common/Object_Structures/format/#type). If you are, however, going to use custom formats, link the [Globalize](https://github.com/jquery/globalize) library to your project. Learn how to do this from topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#####See Also#####
- [format](/Documentation/ApiReference/Common/Object_Structures/format/) - provides a comprehensive overview of formatting capabilities.
- [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/#Data_Formatting) - shows how to apply formatting to various widget elements.
<!--/fullDescription-->