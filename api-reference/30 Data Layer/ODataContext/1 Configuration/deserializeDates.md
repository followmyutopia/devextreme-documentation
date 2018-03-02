===========================================================================
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether stores in the **ODataContext** serialize/parse date-time values.
<!--/shortDescription-->

<!--fullDescription-->
Stores can parse date-time values in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime) (for example, `"2016-07-13T16:05:00.000Z"`) or [Microsoft format](https://weblogs.asp.net/bleroy/dates-and-json) (for instance, `"/Date(1198908717056)/"`). In the first case, the store ignores the timezone modifier (usually `Z`) when parsing the value. In the second case, the store adds the time-zone offset to the value according to the client's time-zone.

[note]

Disabling deserialization may cause filtering issues in widgets bound to the **ODataStore**. When deserialization is disabled in the store, date-time strings are converted to Date objects at the widget level. When filtering, the widget reverts an entered date-time value to a string based on the [dateSerializationFormat](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dateSerializationFormat) option's value and passes the string to the **ODataStore** for further processing. OData does not support strings which cause filtering to fail.

To prevent these issues, the store's **deserializeDates** option should be set to **true** or set the widget's **dateSerializationFormat** option to **null**.

[/note]
<!--/fullDescription-->