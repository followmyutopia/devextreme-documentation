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
      <td>Alt + &darr;</td>
      <td>Opens the drop-down list.</td>
    </tr>
    <tr>
      <td>Alt + &uarr;</td>
      <td>Closes the drop-down list.</td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>Closes the drop-down list and removes focus from the widget.</td>
    </tr>
    <tr>
      <td>&uarr; / &darr;</td>
      <td>Moves focus to the previous/next item. Active only when the drop-down list is open.</td>
    </tr>
    <tr>
      <td>Page Up / Page Down</td>
      <td>Moves focus to the first/last currently rendered item.</td>
    </tr>
    <tr>`
      <td>Enter or Space</td>
      <td>Selects the current item.</td>
    </tr>
    <tr>
      <td>Backspace</td>
      <td>Unselects the last selected item.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxTagBox/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let tagBox =  $("#tagBoxContainer").dxTagBox("instance");
        tagBox.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        tagBox.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxTagBoxModule, DxTagBoxComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxTagBoxComponent, { static: false }) tagBox: DxTagBoxComponent
        // Prior to Angular 8
        // @ViewChild(DxTagBoxComponent) tagBox: DxTagBoxComponent
        ngAfterViewInit () {
            this.tagBox.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.tagBox.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTagBoxModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [TagBox - Configure Search Parameters](/Documentation/Guide/Widgets/TagBox/Configure_Search_Parameters/)
- [TagBox - Control the Behavior](/Documentation/Guide/Widgets/TagBox/Control_the_Behavior/)
- [TagBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTagBox/)
- [TagBox Demos](/Demos/WidgetsGallery/#demo/editors-tag_box-overview)

[tags]tag box, tagBox, navigation, accessibility, keyboard shortcuts