<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->format<!--/type-->
===========================================================================

<!--shortDescription-->
Formats the point argument before it will be displayed in the point label.
<!--/shortDescription-->

<!--fullDescription-->
Be default, a point label displays only the point value. Using the **label** | **customizeText** option, you can instruct the label to display the point argument as well. The **argumentFormat** option applies in this case only.

This option accepts an object whose fields are described in the [format](/Documentation/ApiReference/Common/Object_Structures/format/) section. However, there is one more field available called **argumentPrecision**. This field accepts a number specifying how many digits after the decimal point to save in a value of a [numeric format](/Documentation/ApiReference/Common/Object_Structures/format/#type). See an example in the following code.

    // 12.3456 --> 12.34
    argumentFormat: {
        type: "fixedPoint",
        argumentPrecision: 2
    }

[note]DevExtreme widgets provide a wide choice of [predefined formats](/Documentation/ApiReference/Common/Object_Structures/format/#type). If you are, however, going to use custom formats, link the [Globalize](https://github.com/jquery/globalize) library to your project. Learn how to do this from topics in the [Installation](/Documentation/17_1/Guide/Getting_Started/Installation/Local_Scripts/) section.

#####See Also#####
- [format](/Documentation/ApiReference/Common/Object_Structures/format/) - provides a comprehensive overview of formatting capabilities.
- [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/#Data_Formatting) - shows how to apply formatting to various widget elements.
<!--/fullDescription-->