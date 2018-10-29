DevExtreme provides an [API](/Documentation/ApiReference/Common/utils/localization/) for formatting any date or number in your app. The following example shows how to format dates. The [formatDate()](/Documentation/ApiReference/Common/utils/localization/#formatDatevalue_format) method applies a [predefined format](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Predefined_Formats) to a date. A [custom function](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Function) or [format string](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String) can be applied instead. The result is a string. This string is then converted back to a date using the [parseDate()](/Documentation/ApiReference/Common/utils/localization/#parseDatetext_format) method.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var date = new Date();
        $("#dateInput").val(DevExpress.localization.formatDate(date, "shortDate"));
        $("#dateInput").change(function(event) {
            date = DevExpress.localization.parseDate(event.target.value, "shortDate");
        });
    });

    <!--HTML-->
    <input id="dateInput"/>

##### Angular

    <!--TypeScript-->
    import { formatDate, parseDate } from "devextreme/localization";
    // ...
    export class AppComponent {
        _date: Date = new Date();
        get date() {
            return formatDate(this._date, "shortDate")
        }
        set date(value) {
            this._date = parseDate(value, "shortDate")
        }
    }

    <!--HTML-->
    <input 
        #dateInput
        [value]="date"
        (change)="date = dateInput.value;"/>

---

Similarly, you can use the [formatNumber()](/Documentation/ApiReference/Common/utils/localization/#formatNumbervalue_format) and [parseNumber()](/Documentation/ApiReference/Common/utils/localization/#parseNumbertext_format) methods to format and parse a number or currency.
