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
This option accepts three types of values:

* **String**  
 One of the predefined formats (see the [type](/Documentation/ApiReference/Common/Object_Structures/format/#type) option) or a format string. The built-in localization engine supports the following characters: 


 **Numeric Formats**

    <div class="simple-table">
    <table>
    <thead>
    <tr>
      <th>Format character</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>0</td>
      <td>A digit. Displays '0' if it is not specified in the UI.</td>
    </tr>
    <tr>
      <td>&#35;</td>
      <td>
            A digit or nothing. One symbol represents several integer digits, but only one decimal digit. </br> 
            For example, "#.#" matches "123.4", not "123.45".
      </td>
    </tr>
    <tr>
      <td>.</td>
      <td>A decimal separator. Displayed in the localized variant.</td>
    </tr>
    <tr>
      <td>,</td>
      <td>A group separator. Displayed in the localized variant.</td>
    </tr>
    <tr>
      <td>%</td>
      <td>
            The percent sign. Divides the input value by 100. </br>    
            If it is enclosed in single quotes ('%'), it only adds this sign to the input value.
      </td>
    </tr>
    <tr>
      <td>;</td>
      <td>Separates positive and negative numbers. If there is no explicit negative format, a positive number receives the "-" prefix. </td>
    </tr>
    <tr>
      <td>Other characters</td>
      <td>
            Any character. Should be placed only at the format string's beginning or end. </br>
            You can use the special characters above as well (in single quotation marks).
      </td>
    </tr>
    </tbody>
    </table>
    </div>

 **Date-Time Formats** 

    <div class="simple-table">
    <table>
    <thead>
    <tr>
      <th>Format character</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>y</td>
      <td>A calendar year. </td>
    </tr>
    <tr>
      <td>Q</td>
      <td>
        A quarter number or name.</br>       
        For example, "Q" matches "2", "QQ" - "02", "QQQ" - "Q2", "QQQQ" - "2nd quarter".
      </td>
    </tr>
    <tr>
      <td>M</td>
      <td>
        A month number or name.</br>         
        For example, "M" matches "9", "MM" - "09", "MMM" - "Sep", "MMMM" - "September", "MMMMM" - "S".
      </td>
    </tr>
    <tr>
      <td>d</td>
      <td>A month day.</td>
    </tr>
    <tr>
      <td>E</td>
      <td>
        A week day name.</br>    
        For example, "E", "EE" or "EEE" matches "Tue", "EEEE" - "Tuesday", "EEEEE" - "T". 
      </td>
    </tr>
    <tr>
      <td>a</td>
      <td>
        A day period (am or pm).
      </td>
    </tr>
    <tr>
      <td>h</td>
      <td>An hour. From 1 to 12.</td>
    </tr>
    <tr>
      <td>H</td>
      <td>An hour. From 0 to 23.</td>
    </tr>
    <tr>
      <td>m</td>
      <td>A minute.</td>
    </tr>
    <tr>
      <td>s</td>
      <td>A second.</td>
    </tr>
    <tr>
      <td>S</td>
      <td>A fractional second.</td>
    </tr>
    </tbody>
    </table>
    </div> 

 [note] [Reference the Globalize library](/Documentation/Guide/Widgets/Common/UI_Widgets/Localization_-_Use_Globalize/) within your application to use other [numeric](http://unicode.org/reports/tr35/tr35-numbers.html#Special_Pattern_Characters) or [datetime](http://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) format characters.

* **Function**  
 Specifies a custom format. A shortcut for the [formatter](/Documentation/ApiReference/Common/Object_Structures/format/#formatter) option.
 
* **Object**  
 Allows you to configure the format. Can have one of these two structures:

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

 If you use the [devextreme-intl](https://github.com/DevExpress/DevExtreme-Intl#devextreme-intl) module, you can specify the Intl [NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters)'s and [DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Parameters)'s `options` parameter fields:    

        format: { year: "2-digit", month: "narrow", day: "2-digit" }
        === or ===
        format: { style: "currency", currency: "EUR", useGrouping: true }

 If you [use Globalize](/Documentation/Guide/Widgets/Common/UI_Widgets/Localization_-_Use_Globalize), you can use the fields Globalize formatters accept instead of the fields described in this section. For example, you can use skeletons to format dates. Note that this approach might require additional [CLDR modules](https://github.com/jquery/globalize/blob/master/README.md#2-cldr-content) not shipped with the DevExtreme package.

        format: { skeleton: 'GyMMMd' }

 #####See Also#####
 - [Globalize - numberFormatter](https://github.com/jquery/globalize/blob/master/doc/api/number/number-formatter.md)
 - [Globalize - currencyFormatter](https://github.com/jquery/globalize/blob/master/doc/api/currency/currency-formatter.md)
 - [Globalize - dateFormatter](https://github.com/jquery/globalize/blob/master/doc/api/date/date-formatter.md)

<a href="/Demos/WidgetsGallery/Demo/RangeSelector/CustomFormatting/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>
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