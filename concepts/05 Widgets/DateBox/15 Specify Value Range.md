To specify the date or time range, use the [min](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#min) and [max](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#max) options.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            value: "2015/12/31",
            type: "date",
            min: "2015/1/1",
            max: "2015/12/31"
        });
    });

##### Angular

    <!--HTML-->
    <dx-date-box
        value="2015/12/31"
        type="date"
        min="2015/1/1"
        max="2015/12/31">
    </dx-date-box>

    <!--TypeScript-->
    import { DxDateBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDateBoxModule
        ],
        // ...
    })

---

If an entered value falls out of the range, the widget displays an error message. To change the message text, specify the [dateOutOfRangeMessage](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#dateOutOfRangeMessage) option. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            value: "2015/12/31",
            type: "date",
            min: "2015/1/1",
            max: "2015/12/31",
            dateOutOfRangeMessage: "Date is out of range"
        });
    });

##### Angular

    <!--HTML-->
    <dx-date-box
        value="2015/12/31"
        type="date"
        min="2015/1/1"
        max="2015/12/31"
        dateOutOfRangeMessage="Date is out of range">
    </dx-date-box>

    <!--TypeScript-->
    import { DxDateBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
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
- [DateBox - Control the Behavior](/Documentation/Guide/Widgets/DateBox/Control_the_Behavior)
- [DateBox - Handle the Value Change Event](/Documentation/Guide/Widgets/DateBox/Handle_the_Value_Change_Event)
- [DateBox Demos](/Demos/WidgetsGallery/#demo/editors-date_box-overview)
- [DateBox API Reference](/Documentation/ApiReference/UI_Widgets/dxDateBox/)

[tags]date box, dateBox, editor, range, min, max, out of range error message