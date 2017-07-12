The **Scheduler** is a widget that represents scheduled data and allows a user to manage it.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds the **Scheduler** widget to your page. The simplest configuration requires only a [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource) to be specified. In addition, you can define a date that should be displayed by default using the [currentDate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentDate) option.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: [{
                text: "Website Re-Design Plan",
                startDate: new Date(2016, 4, 25, 9, 30),
                endDate: new Date(2016, 4, 25, 11, 30)
            }, {
                text: "Book Flights to San Fran for Sales Trip",
                startDate: new Date(2016, 4, 25, 12, 0),
                endDate: new Date(2016, 4, 25, 13, 0)
            }, 
            // ...
            ],
            currentDate: new Date(2016, 4, 25)
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointments"
        [currentDate]="currentDate">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent  {
        appointments = [{
            text: "Website Re-Design Plan",
            startDate: new Date(2016, 4, 25, 1, 30),
            endDate: new Date(2016, 4, 25, 3, 30)
        }, {
            text: "Book Flights to San Fran for Sales Trip",
            startDate: new Date(2016, 4, 25, 9, 0),
            endDate: new Date(2016, 4, 25, 10, 0)
        }, 
        // ...
        ];
        currentDate = new Date(2016, 4, 25);
    }

---

Each data source object represents an appointment to be scheduled and has a special structure. This structure should be similar to the [Default Appointment Template](/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/). Note that the fields listed below should be present in every appointment.

- **text**  
    The subject of an appointment.

- **startDate**  
    The start date of an appointment (includes time if needed).

- **endDate**  
    The end date of an appointment (includes time if needed).

If your appointments have a different structure, specify: 

- **textExpr**  
    The data field that provides subjects for appointments.

- **startDateExpr**  
    The data field that provides start dates for appointments.
    
- **endDateExpr**  
    The data field that provides end dates for appointments.

<!---->

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: [{ 
                subject: 'Meet with a customer', 
                from: new Date(2016, 4, 10, 11, 0), 
                to: new Date(2016, 4, 10, 13, 0) 
            }, { 
                subject: 'Discuss results', 
                from: new Date(2016, 5, 11, 12, 0), 
                to: new Date(2016, 4, 11, 13, 0) 
            }, 
            // ...
            ],
            textExpr: "subject",
            startDateExpr: "from",
            endDateExpr: "to"
        });
    });    

#####Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointments"
        textExpr="subject"
        startDateExpr="from"
        endDateExpr="to"
        [currentDate]="currentDate">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent  {
        appointments = [{ 
            subject: 'Meet with a customer', 
            from: new Date(2016, 4, 25, 1, 0), 
            to: new Date(2016, 4, 25, 3, 0) 
        }, { 
            subject: 'Discuss results', 
            from: new Date(2016, 5, 25, 9, 0), 
            to: new Date(2016, 4, 25, 10, 0) 
        }, 
        // ...
        ];
        currentDate = new Date(2016, 4, 25);
    }

---

#####See Also#####
- [Scheduler - Data Binding](/Documentation/Guide/Widgets/Scheduler/Data_Binding/)
- [Scheduler - Appointments](/Documentation/Guide/Widgets/Scheduler/Appointments/)
- [Scheduler - Resources](/Documentation/Guide/Widgets/Scheduler/Resources/)
- [Scheduler - Timetable](/Documentation/Guide/Widgets/Scheduler/Timetable/)
- [Scheduler - Views](/Documentation/Guide/Widgets/Scheduler/Views/)
- [Scheduler - View Switcher](/Documentation/Guide/Widgets/Scheduler/View_Switcher/)
- [Scheduler - Keyboard Support](/Documentation/Guide/Widgets/Scheduler/Keyboard_Support/)
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, overview, default template, textExpr, startDateExpr, endDateExpr