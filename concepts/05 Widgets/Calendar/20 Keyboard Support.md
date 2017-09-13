An end user can use the following keys to interact with the widget.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>&larr; &rarr; &uarr; &darr;</td>
      <td>Moves focus to the day nearby.</td>
    </tr>
    <tr>
      <td>Page Up or Ctrl + &larr;</td>
      <td>Displays the previous month.</td>
    </tr>
    <tr>
      <td>Page Down or Ctrl + &rarr;</td>
      <td>Displays the next month.</td>
    </tr>
    <tr>
      <td>Enter</td>
      <td>Selects the focused day.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxCalendar/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let calendar =  $("#calendarContainer").dxCalendar("instance");
        calendar.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        calendar.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxCalendarComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxCalendarComponent) calendar: DxCalendarComponent
        registerKeyHandlers () {
            this.calendar.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.calendar.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }

---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [Calendar Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-calendar-overview)
- [Calendar API Reference](/Documentation/ApiReference/UI_Widgets/dxCalendar/)

[tags]calendar, accessibility, keyboard shortcuts