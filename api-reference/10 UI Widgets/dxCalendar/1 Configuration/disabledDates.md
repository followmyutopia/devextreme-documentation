===========================================================================
<!--default-->null<!--/default-->
<!--type-->Array<Date> | function(data)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies dates to be disabled.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts an array of dates...

    <!--JavaScript-->
    $(function () {
        $("#calendarContainer").dxCalendar({
            // ...
            disabledDates: [ new Date("07/1/2017"),  new Date("07/2/2017"), new Date("07/3/2017") ]
        });
    });

... or a function that specifies whether the currently checked date is disabled.

    <!--JavaScript-->
    $(function () {
        $("#calendarContainer").dxCalendar({
            disabledDates: function (args) {
                var dayOfWeek = args.date.getDay(),
                    month = args.date.getMonth(),
                    isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 ),
                    isMarch = (args.view === "year" || args.view === "month") && month === 2;

                if(isWeekend || isMarch) {
                    return true;
                }
            }
        });
    });

#####See Also#####
- [Specify the Value Range](/Documentation/Guide/Widgets/Calendar/Specify_the_Value_Range/)

<!--/fullDescription-->
<!--typeFunctionParamName1-->data<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the checked date.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's [instance](/Documentation/ApiReference/UI_Widgets/dxCalendar/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->date<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Date<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The currently checked date.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->view<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->String<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The current [view](/Documentation/ApiReference/UI_Widgets/dxCalendar/Default_Cell_Template/#view).
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
**true** if the date should be disabled; otherwise **false**.
<!--/typeFunctionReturnDescription-->