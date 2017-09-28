The **DateBox** widget allows an end user to pick or type a value. To specify whether the value should be applied instantly or when a user clicks the **Done** button, set the [applyValueMode](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#applyValueMode) option. Note that this option takes effect only when the [pickerType](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType) is *"calendar"* or *"list"*.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            value: new Date(),
            type: "date",
            pickerType: "calendar",
            applyValueMode: "useButtons" // or "instantly"
        });
    });

##### Angular

    <!--HTML-->
    <dx-date-box
        [(value)]="date"
        type="date"
        pickerType="calendar"
        applyValueMode="useButtons"> <!-- or "instantly" -->
    </dx-date-box>

    <!--TypeScript-->
    import { DxDateBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        date: Date = new Date()
    }
    @NgModule({
        imports: [
            // ...
            DxDateBoxModule
        ],
        // ...
    })

---

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
- [DateBox - Handle the Value Change Event](/Documentation/Guide/Widgets/DateBox/Handle_the_Value_Change_Event)
- [DateBox - Specify Value Range](/Documentation/Guide/Widgets/DateBox/Specify_Value_Range)
- [DateBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-date_box-overview)
- [DateBox API Reference](/Documentation/ApiReference/UI_Widgets/dxDateBox/)

[tags]date box, dateBox, editor, apply mode, change event, value change event 