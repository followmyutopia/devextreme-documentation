<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Indicates whether or not to recognize and deserialize dates in response.<!--/d-->
===========================================================================
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not dates found in the response are deserialized.
<!--/shortDescription-->

<!--fullDescription-->
ODataStore can deserialize dates represented in the [ISO8601 format](https://www.w3.org/TR/NOTE-datetime) (e.g "2016-07-13T16:05:00.000Z") or [format used by Microsoft](https://weblogs.asp.net/bleroy/dates-and-json) (e.g. "/Date(1198908717056)/"). In the second case, ODataStore adds the time-zone offset corresponding to the client time-zone. In the first case, ODataStore parses the date string without taking a timezone modifier (for example "Z") into account.
<!--/fullDescription-->