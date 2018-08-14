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
      <td>Space</td>
      <td>Changes the widget value.</td>
   </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxCheckBox/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let checkBox =  $("#checkBoxContainer").dxCheckBox("instance");
        checkBox.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        checkBox.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from '@angular/core';
    import { DxCheckBoxModule, DxCheckBoxComponent } from 'devextreme-angular';
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxCheckBoxComponent) checkBox: DxCheckBoxComponent
        ngAfterViewInit () {
            this.checkBox.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.checkBox.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxCheckBoxModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [CheckBox Demos](/Demos/WidgetsGallery/#demo/editors-check_box-overview)
- [CheckBox API Reference](/Documentation/ApiReference/UI_Widgets/dxCheckBox/)

[tags]check box, checkBox, navigation, accessibility, keyboard shortcuts