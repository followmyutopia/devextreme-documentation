To specify which calendar view (month, year, decade or century) should be displayed at first, set the [zoomLevel](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#zoomLevel) option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            zoomLevel: 'year'
        });
    });

##### Angular

    <!--HTML-->
    <dx-calendar ...
        zoomLevel="year">
    </dx-calendar>

    <!--TypeScript-->
    import { DxCalendarModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxCalendarModule
        ],
        // ...
    })

---

To make certain calendar views inaccessible, specify the [maxZoomLevel](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#maxZoomLevel) and [minZoomLevel](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#minZoomLevel) options. For example, the following code enables the month, year and decade calendar views leaving the century view behind.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            minZoomLevel: 'decade',
            maxZoomLevel: 'month'
        });
    });

##### Angular

    <!--HTML-->
    <dx-calendar ...
        minZoomLevel="decade"
        maxZoomLevel="month">
    </dx-calendar>

    <!--TypeScript-->
    import { DxCalendarModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxCalendarModule
        ],
        // ...
    })

---

#####See Also#####
- [Calendar - Handle the Value Change Event](/Documentation/Guide/Widgets/Calendar/Handle_the_Value_Change_Event)
- [Calendar - Specify Zoom Level](/Documentation/Guide/Widgets/Calendar/Specify_Zoom_Level)
- [Calendar - Customize Cell Appearance](/Documentation/Guide/Widgets/Calendar/Customize_Cell_Appearance)
- [Calendar API Reference](/Documentation/ApiReference/UI_Widgets/dxCalendar/)
- [Calendar Demos](/Demos/WidgetsGallery/#demo/editors-calendar-overview)

[tags]calendar, editor, calendar view, zoomLevel, zoom level