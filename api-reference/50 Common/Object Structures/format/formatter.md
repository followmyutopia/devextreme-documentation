---
id: format.formatter
type: function(value)
---
---
##### shortDescription
Specifies a custom format.

##### param(value): Number | Date
The value to be formatted.

##### return: String
The value after formatting.

---
If none of the [predefined formats](/Documentation/ApiReference/Common/Object_Structures/format/#type) meet your requirements, use this function to specify a custom format. If **formatter** is the only field that you need to specify in the **format** object, assign the function straight to the **format** option as shown below.

    <!--JavaScript-->format: function (value) {
        // ...
        return formattedValue;
    }
    
#####See Also#####
- **format**.[parser](/Documentation/ApiReference/Common/Object_Structures/format/#parser)