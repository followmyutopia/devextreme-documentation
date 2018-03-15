To customize the appointment details form, create a handler of the [appointmentFormCreated](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentFormCreated) event. The handler allows you to get the [Form](/Documentation/Guide/Widgets/Form/Overview/) instance used to render the appointment details. Within the handler function, use the [itemOption(id, options)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#itemOptionid_options) method to update options of a form item.

---

#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            dataSource: [{
                text: "His Girl Friday",
                startDate: new Date(2016, 4, 24, 9, 10),
                endDate: new Date(2016, 4, 24, 11, 20)
            }, 
            // ...
            ],
            currentDate: new Date(2016, 4, 24),
            onAppointmentFormCreated: function (e) {
                var form = e.form;
                form.itemOption("startDate", {
                    helpText: "Select a date between May 11 and 27",
                    editorOptions: {
                        min: new Date(2016, 4, 11),
                        max: new Date(2016, 4, 27),
                        type: 'datetime'
                    }
                });
                // By default, fields that show timezones are hidden
                // To show them, use the code below
                form.itemOption("startDateTimeZone", { visible: true });
                form.itemOption("endDateTimeZone", { visible: true });
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        schedulerData = [{
            text: "His Girl Friday",
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20)
        }, 
        // ...
        ];
        currentDate = new Date(2016, 4, 24);
        
        onAppointmentFormCreated (e) {
            var form = e.form;
            form.itemOption("startDate", {
                helpText: "Select a date between May 11 and 27",
                editorOptions: {
                    min: new Date(2016, 4, 11),
                    max: new Date(2016, 4, 27),
                    type: 'datetime'
                }
            });
            // By default, fields that show timezones are hidden
            // To show them, use the code below
            form.itemOption("startDateTimeZone", { visible: true });
            form.itemOption("endDateTimeZone", { visible: true });
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
- [Scheduler - Customize Appointment](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/)
- [Scheduler - Customize Appointment Tooltip](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, appointment details form, customize details form, onAppointmentFormCreated
