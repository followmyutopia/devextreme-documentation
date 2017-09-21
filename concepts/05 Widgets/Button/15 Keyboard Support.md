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
      <td>Identical to a click.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxButton/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let button =  $("#buttonContainer").dxButton("instance");
        button.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        button.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxButtonModule, DxButtonComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxButtonComponent) button: DxButtonComponent
        registerKeyHandlers () {
            this.button.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.button.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [Button Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-button-icons)
- [Button API Reference](/Documentation/ApiReference/UI_Widgets/dxButton/)

[tags]button, accessibility, keyboard shortcuts