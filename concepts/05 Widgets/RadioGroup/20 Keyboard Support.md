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
      <td>&uarr; or Page Up </td>
      <td>Moves focus to the previous radio button.</td>
    </tr>
    <tr>
      <td>&darr; or Page Down </td>
      <td>Moves focus to the next radio button.</td>
    </tr>
    <tr>
      <td>Home / End</td>
      <td>Moves focus to the first/last radio button.</td>
    </tr>
    <tr>
      <td>Enter or Space</td>
      <td>Selects the focused radio button.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let radioGroup =  $("#radioGroupContainer").dxRadioGroup("instance");
        radioGroup.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        radioGroup.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxRadioGroupModule, DxRadioGroupComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxRadioGroupComponent) radioGroup: DxRadioGroupComponent
        registerKeyHandlers () {
            this.radioGroup.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.radioGroup.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxRadioGroupModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [RadioGroup Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-radio_group-overview)
- [RadioGroup API Reference](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/)

[tags]radio group, radioGroup, accessibility, keyboard shortcuts