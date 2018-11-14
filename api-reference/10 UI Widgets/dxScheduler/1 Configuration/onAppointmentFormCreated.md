<!--EventForAction-->..\4 Events\appointmentFormCreated.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before an appointment details form is opened. 
<!--/shortDescription-->

<!--fullDescription-->
The appointment details form contains the [Form](/Documentation/Guide/Widgets/Form/Overview/) widget whose instance is passed to this function in the **form** field. Use the [widget's API](/Documentation/ApiReference/UI_Widgets/dxForm/) to customize the appointment details form.

The following code shows how to use the **onAppointmentFormCreated** function to customize a form item (`startDate`), make hidden items visible (`startDateTimeZone` and `endDateTimeZone`), and add a new form item (`location`). Note that in the last case, the array of [form items](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items) should be checked to ensure that it does not already contain an item with the same data field.

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            dataSource: [{
                text: "His Girl Friday",
                startDate: new Date(2016, 4, 24, 9, 10),
                endDate: new Date(2016, 4, 24, 11, 20),
                location: "Minnesota"
            }, // ...
            ],
            currentDate: new Date(2016, 4, 24),
            onAppointmentFormCreated: function (e) {
                var form = e.form,
                    formItems = form.option("items");
                form.itemOption("startDate", {
                    helpText: "Select a date between May 11 and 27",
                    editorOptions: {
                        min: new Date(2016, 4, 11),
                        max: new Date(2016, 4, 27),
                        type: 'datetime'
                    }
                });
                form.itemOption("startDateTimeZone", { visible: true });
                form.itemOption("endDateTimeZone", { visible: true });
                if (!formItems.find(i => i.dataField === "location")) {
                    formItems.push({
                        label: { text: "Location" },
                        editorType: "dxTextBox",
                        dataField: "location"
                    });
                    form.option("items", formItems);
                }
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        schedulerData = [{
            text: "His Girl Friday",
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20),
            location: "Minnesota"
        }, // ...
        ];
        currentDate = new Date(2016, 4, 24);
        onAppointmentFormCreated (e) {
            let form = e.form
                formItems = form.option("items");
            form.itemOption("startDate", {
                helpText: "Select a date between May 11 and 27",
                editorOptions: {
                    min: new Date(2016, 4, 11),
                    max: new Date(2016, 4, 27),
                    type: 'datetime'
                }
            });
            form.itemOption("startDateTimeZone", { visible: true });
            form.itemOption("endDateTimeZone", { visible: true });
            if (!formItems.find(i => i.dataField === "location")) {
                formItems.push({
                    label: { text: "Location" },
                    editorType: "dxTextBox",
                    dataField: "location"
                });
                form.option("items", formItems);
            }
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
    <dx-scheduler 
        [dataSource]="schedulerData"
        [currentDate]="currentDate"
        (onAppointmentFormCreated)="onAppointmentFormCreated($event)">
    </dx-scheduler>

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/"
}
<a href="https://www.youtube.com/watch?v=aWiCUyPKL_k&index=8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

#####See Also#####
- [Form - Change Options at Runtime](/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Widget_Options/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->appointmentData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data of the appointment for which a form is opened.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->form<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->dxForm<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The form's instance. 
<!--/typeFunctionParamDescription1_field5-->
