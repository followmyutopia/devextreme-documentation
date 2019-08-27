---
id: dxFunnel.Options.label.format
type: format
default: undefined
---
---
##### shortDescription
Formats the item value before displaying it in the label.

---
This option accepts an object whose fields are described in the [format](/Documentation/ApiReference/Common/Object_Structures/format/) section. The **percentPrecision** filed specifies how many decimal places should be included in the percentage value. See an example in the following code:

    format: {
        type: "fixedPoint", // the format of absolute values
        precision: 1, // the precision of absolute values (0.123456 --> 0.1)
        percentPrecision: 2 // the precision of percentage values (12.3456 % --> 12.34 %)
    }

[note]DevExtreme widgets provide a wide choice of [predefined formats](/Documentation/ApiReference/Common/Object_Structures/format/#type). If you are going to use custom formats instead, link the <a href="https://github.com/jquery/globalize" target="_blank">Globalize</a> library to your project as shown in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.