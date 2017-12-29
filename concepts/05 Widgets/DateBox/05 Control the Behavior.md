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
#include common-link-handleevents
- [DateBox - Handle the Value Change Event](/Documentation/Guide/Widgets/DateBox/Handle_the_Value_Change_Event)
- [DateBox - Specify Value Range](/Documentation/Guide/Widgets/DateBox/Specify_Value_Range)
- [DateBox Demos](/Demos/WidgetsGallery/#demo/editors-date_box-overview)
- [DateBox API Reference](/Documentation/ApiReference/UI_Widgets/dxDateBox/)

[tags]date box, dateBox, editor, apply mode, change event, value change event 