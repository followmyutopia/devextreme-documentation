===========================================================================
<!--default-->'item'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering appointments.
<!--/shortDescription-->

<!--fullDescription-->
If you use the Angular, AngularJS or Knockout library, you can implement this template with the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. This template's binding context depends on the library you use.

---

#####Angular#####

In Angular apps, an item's object and index extend the standard binding context (a component instance). Access the former using the input variable that is declared after the `let` and before `of` keywords, and the latter by the variable that is set to the `index` property.

    <!--HTML-->
    <dx-scheduler ...
        appointmentTemplate="appointmentTemplate">
        <div *dxTemplate="let appointment of 'appointmentTemplate'; let i = index">
            <div class="appointment-header">[{{i}}] {{appointment.text}}</div>
            <div class="appointment-time">{{appointment.startDate}} - {{appointment.endDate}}</div>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

#####AngularJS#####

In AngularJS apps, an item's object and index extend the standard binding context (the scope). Access the former using an alias that you specify in the `dx-item-alias` directive, and the latter the `$index` variable. Use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables if you need to access another binding context from the template.

    <!--HTML-->
    <div dx-scheduler="{ 
        ...
        appointmentTemplate: 'appointment'
    }" dx-item-alias="appItem">
        <div data-options="dxTemplate: {name: 'appointment'}" style="padding: 0;">
            <div class="appointment-header">{{appItem.text}}</div>
            <div class="appointment-time">{{appItem.startDate}} - {{appItem.endDate}}</div>
        </div>
    </div>

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Customize Appointment](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The current appointment's data.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The current appointment's index.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->dxElement<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The current appointment's container.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->