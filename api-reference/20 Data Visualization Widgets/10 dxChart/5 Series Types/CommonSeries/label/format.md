<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Label predefined format for points value<!--/d-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->format<!--/type-->
===========================================================================

<!--shortDescription-->
Formats the point value before it will be displayed in the point label.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts an object whose fields are described in the [format](/Documentation/ApiReference/Common/Object_Structures/format/) section. However, there is one more field, called **percentPrecision**, which is available only to full-stacked-like series, where one point always has an absolute and a percentage value. The **percentPrecision** field specifies how many digits after the decimal point to save in the percentage value. See an example in the following code.

    format: {
        type: "fixedPoint", // the format of absolute values
        precision: 1, // the precision of absolute values (123.456 --> 123.4)
        percentPrecision: 2 // the precision of percentage values (12.3456 % --> 12.34 %)
    }

[note]DevExtreme widgets provide a wide choice of [predefined formats](/Documentation/ApiReference/Common/Object_Structures/format/#type). If you are, however, going to use custom formats, link the [Globalize](https://github.com/jquery/globalize) library to your project. Learn how to do this from the [Installation](/Documentation/Guide/Data_Visualization/Basics/Installation/) topic.

#####See Also#####
- [format](/Documentation/ApiReference/Common/Object_Structures/format/) - provides a comprehensive overview of formatting capabilities.
- [Data Formatting](/Documentation/Guide/Data_Visualization/Common/Data_Formatting/#Data_Formatting) - shows how to apply formatting to various widget elements.
<!--/fullDescription-->