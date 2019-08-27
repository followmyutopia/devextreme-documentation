---
id: format.type
acceptValues: 'billions' | 'currency' | 'day' | 'decimal' | 'exponential' | 'fixedPoint' | 'largeNumber' | 'longDate' | 'longTime' | 'millions' | 'millisecond' | 'month' | 'monthAndDay' | 'monthAndYear' | 'percent' | 'quarter' | 'quarterAndYear' | 'shortDate' | 'shortTime' | 'thousands' | 'trillions' | 'year' | 'dayOfWeek' | 'hour' | 'longDateLongTime' | 'minute' | 'second' | 'shortDateShortTime'
type: String
---
---
##### shortDescription
Specifies a predefined format. Does not apply if you have specified the [formatter](/Documentation/ApiReference/Common/Object_Structures/format/#formatter) function.

---
You can choose one of the predefined formats, depending on the values you need to format, from the following groups:

**Numeric Formats**

<table>
    <tr>
        <td style="width: 350px;">
            <ul>
                <li><em>"fixedPoint"</em> - 100.11 &rarr; 100</li>
                <li><em>"percent"</em> - 0.1 &rarr; 10%</li>
                <li><em>"decimal"</em> - 100.11 &rarr; 100</li>
                <li><em>"exponential"</em> - 1 000 &rarr; 1E+3</li>
                <li><em>"thousands"</em> - 1 000.11 &rarr; 1K</li>
            </ul>
        </td>
        <td>
            <ul>
                <li><em>"millions"</em> - 1 000 000.11 &rarr; 1M</li>
                <li><em>"billions"</em> - 1 000 000 000.11 &rarr; 1B</li>
                <li><em>"trillions"</em> - 1 000 000 000 000 &rarr; 1T </li>
                <li><em>"largeNumber"*</em></li>
            </ul>
        </td>
    </tr>
</table>

<div style="font-size:12px; margin-bottom: 15px">
    &#42; - uses <i>"thousands", "millions", "billions", "trillions"*</i> format depending on the actual value
</div>

[note]Specify the [precision](/Documentation/ApiReference/Common/Object_Structures/format/#precision) to show fractional numbers.

**Date-Time Formats**  

<table>
    <tr>
        <td style="width: 350px;">
            <ul>
                <li><em>"longDate"</em> - <em>"Thursday, January 01, 1970"</em></li>
                <li><em>"longTime"</em> - <em>"12:00:00 AM"</em></li>
                <li><em>"longDateLongTime"</em> - <em>"Thursday, January 01, 1970, 12:00:00 AM"</em></li>
                <li><em>"monthAndDay"</em> - <em>"January 01"</em></li>
                <li><em>"monthAndYear"</em> - <em>"1970 January"</em></li>
                <li><em>"quarterAndYear"</em> - <em>"QI 1970"</em></li>
                <li><em>"shortDate"</em> - <em>"1/25/1970"</em></li>
                <li><em>"shortTime"</em> - <em>"12:00 AM"</em></li>
                <li><em>"shortDateShortTime"</em> - <em>"1/25/1970, 12:00 AM"</em></li>
            </ul>
        </td>
        <td>
            <ul>
                <li><em>"millisecond"</em> - <em>"010"</em></li>
                <li><em>"second"</em> - <em>"00"</em></li>
                <li><em>"minute"</em> - <em>"00"</em></li>
                <li><em>"hour"</em> - <em>"12"</em></li>
                <li><em>"day"</em> - <em>"01"</em></li>
                <li><em>"dayOfWeek"</em> - <em>"Thursday"</em></li>
                <li><em>"month"</em> - <em>"January"</em></li>
                <li><em>"quarter"</em> - <em>"QI"</em></li>
                <li><em>"year"</em> - <em>"1970"</em></li>
            </ul>
        </td>
    </tr>
</table>

**Currency Formats**  

- *"currency"* - *"$3.95"**

<div style="font-size:12px;  margin-bottom: 15px">
    &#42; - to define any other currency, use <a href="/Documentation/ApiReference/Common/Object_Structures/format/#currency">currency</a> 
</div>

The *"fixedPoint", "decimal"* or *"currency"* format can be paired with the *"largeNumber", "thousands", "millions", "billions"* or *"trillions"* format using a space separator, e.g., *"fixedPoint thousands"*.

If the **type** is the only field you need to specify in the **format** object, assign the value of this field straight to the **format** option as shown below.

    <!--JavaScript-->format: "shortDate"

When using a widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), you can specify this option using the `Format` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *"fixedPoint"* becomes `FixedPoint`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Localization/UsingIntl/jQuery/Light/"
}

#####See Also#####
- **format**.[currency](/Documentation/ApiReference/Common/Object_Structures/format/#currency)
- **format**.[precision](/Documentation/ApiReference/Common/Object_Structures/format/#precision)