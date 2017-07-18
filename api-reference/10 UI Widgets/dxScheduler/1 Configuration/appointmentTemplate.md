<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'item'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering appointments.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of an appointment template is the data source object that corresponds to the currently rendered appointment.

---

#####Angular#####

Use a variable that is declared in the template via the `let` keyword to access appointment object fields in **Angular** apps. 

    <!--HTML-->
    <dx-scheduler ...
        appointmentTemplate="appointmentTemplate">
        <div *dxTemplate="let appointment of 'appointmentTemplate'">
            <div class="appointment-header">{{appointment.text}}</div>
            <div class="appointment-time">{{appointment.startDate}} - {{appointment.endDate}}</div>
        </div>
    </dx-scheduler>

#####AngularJS#####

In **AngularJS** apps, if you need to access appointment object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

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
- [template](/Documentation/ApiReference/Common/Object_Structures/template/)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The appointment object to be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The index of the appointment to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->jQuery<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
An HTML element of the appointment to be rendered.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->