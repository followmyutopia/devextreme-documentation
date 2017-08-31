<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'currency' | 'fixedPoint' | 'percent' | 'decimal' | 'exponential' | 'largeNumber' | 'thousands' | 'millions' | 'billions' | 'trillions' | 'longDate' | 'longTime' | 'longDateLongTime' | 'monthAndDay' | 'monthAndYear' | 'quarterAndYear' | 'shortDate' | 'shortTime' | 'shortDateShortTime' | 'second' | 'millisecond' | 'day' | 'month' | 'quarter' | 'year' | 'dayOfWeek' | 'hour' | 'minute'<!--/acceptValues-->
<!--type-->String | function(value) | Object<!--/type-->
===========================================================================

<!--shortDescription-->
Formats values.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts three types of values.

* **String**  
 One of the predefined formats (accepted by the [type](/Documentation/ApiReference/Common/Object_Structures/format/#type) option) or a date format string (accepted by the [raw option](https://github.com/jquery/globalize/blob/master/doc/api/date/date-formatter.md#parameters) of the Globalize [date formatter](https://github.com/jquery/globalize/blob/master/doc/api/date/date-formatter.md)). For  information on values accepted by the raw option, refer to the [LDML documentation](http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).

 [note]The use of a custom date format requires Globalize libraries to be referenced within your application. For more information on using the Globalize library, refer to the [Localization](/Documentation/Guide/Widgets/Common/UI_Widgets/Localization_-_Use_Globalize/) guide.

* **Function**  
 Specifies a custom format. A shortcut for the [formatter](/Documentation/ApiReference/Common/Object_Structures/format/#formatter) option.
 
* **Object**  
 Allows you to configure the format in many aspects. Can have one of these two structures.

        // Uses a predefined format
        format: {
            type: String, // one of the predefined formats
            precision: Number, // the precision of values
            currency: String // a specific 3-letter code for the "currency" format
        }
 or

        // Specifies a custom format
        format: {
            formatter: Function, // a custom formatting function
            parser: Function // a parsing function for string values
        }

Instead of fields described in this section, you can use fields accepted by Globalize formatters. In this case, do not specify the **type** option. For example, you can use skeletons to format dates.

    format: {
        skeleton: 'GyMMMd'
    }

See the [numberFormatter](https://github.com/jquery/globalize/blob/master/doc/api/number/number-formatter.md), [currencyFormatter](https://github.com/jquery/globalize/blob/master/doc/api/currency/currency-formatter.md) and [dateFormatter](https://github.com/jquery/globalize/blob/master/doc/api/date/date-formatter.md) documents for further information. Note that this approach might require additional [CLDR modules](https://github.com/jquery/globalize/blob/master/README.md#2-cldr-content) not shipped with the DevExtreme package.
<!--/fullDescription-->
<!--typeFunctionParamName1-->value<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->number|date<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A value to be formatted.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The value after formatting.
<!--/typeFunctionReturnDescription-->