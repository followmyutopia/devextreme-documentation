===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(info)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes the date navigator's text.
<!--/shortDescription-->

<!--fullDescription-->
![Scheduler Date Navigator](/Content/images/doc/18_2/UiWidgets/Scheduler_Date_Navigator.png)

In the following code, the **customizeDateVanigatorText** function is used to show dates in the `mm/dd/yyyy` format (`mm/yyyy` for the *"month"* view):

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var scheduler;
        $("#schedulerContainer").dxScheduler({
            // ...
            onInitialized: function(e) { scheduler = e.component; },
            customizeDateNavigatorText: function(e) {
                var formatOptions = { 
                    year: 'numeric', 
                    month: 'numeric', 
                    day: 'numeric' 
                };
                var formattedStartDate = e.startDate.toLocaleString("en", formatOptions);
                var formattedEndDate = e.endDate.toLocaleString("en", formatOptions);
                var view = scheduler.option("currentView");
                if(view === "day" | "timelineDay") 
                    return formattedStartDate;
                if(view === "month" ) 
                    return e.startDate.toLocaleString("en", { year: 'numeric', month: 'numeric' });
                return formattedStartDate + " - " + formattedEndDate;
            }
        });
    })

#####Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        currentView: string = "day";

        customizeDateNavigatorText(e) {
            let formatOptions = { 
                year: 'numeric', 
                month: 'numeric', 
                day: 'numeric' 
            };
            var formattedStartDate = e.startDate.toLocaleString("en", formatOptions);
            var formattedEndDate = e.endDate.toLocaleString("en", formatOptions);
            if(this.currentView === "day" | "timelineDay") 
                return formattedStartDate;
            if(this.currentView === "month" ) 
                return e.startDate.toLocaleString("en", { year: 'numeric', month: 'numeric' });
            return formattedStartDate + " - " + formattedEndDate;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler ...
        [(currentView)]="currentView"
        [customizeDateNavigatorText]="customizeDateNavigatorText">
    </dx-scheduler>

---

<!--/fullDescription-->
<!--typeFunctionParamName1-->info<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the date navigator.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->startDate<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Date<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The view interval's start date.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->endDate<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Date<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The view interval's end date.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->text<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->String<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The text displayed in the date navigator.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text that should be displayed.
<!--/typeFunctionReturnDescription-->
