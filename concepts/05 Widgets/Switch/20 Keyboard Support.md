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
      <td>Enter or Space</td>
      <td>Changes the widget value.</td>
    </tr>
    <tr>
      <td>&rarr;</td>
      <td>Changes the switch state to "On".</td>
    </tr>
    <tr>
      <td>&larr;</td>
      <td>Changes the switch state to "Off".</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxSwitch/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let switch =  $("#switchContainer").dxSwitch("instance");
        switch.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        switch.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxSwitchModule, DxSwitchComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxSwitchComponent) switch: DxSwitchComponent
        registerKeyHandlers () {
            this.switch.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.switch.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSwitchModule
        ],
        // ...
    })

---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [Switch Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-switch-overview)
- [Switch API Reference](/Documentation/ApiReference/UI_Widgets/dxSwitch/)

[tags]switch, navigation, accessibility, keyboard shortcuts