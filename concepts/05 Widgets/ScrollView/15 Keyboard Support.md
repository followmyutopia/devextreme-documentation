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
      <td>&uarr; / &darr;</td>
      <td>Scrolls the content up/down if the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxScrollView/Configuration/#direction">scrolling direction</a> is <i>"vertical"</i> or <i>"both"</i>.</td>
    </tr>
    <tr>
      <td>Mouse Wheel + Shift or &larr; / &rarr;</td>
      <td>Scrolls the content left/right if the <a href="/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#direction">scrolling direction</a> is <i>"horizontal"</i> or <i>"both"</i>.</td>
    </tr>
    <tr>
      <td>Page Up / Page Down</td>
      <td>Scrolls the content up/down by a whole page.</td>
    </tr>
    <tr>
      <td>Home / End</td>
      <td>Scrolls the content to the top/bottom.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let scrollView =  $("#scrollViewContainer").dxScrollView("instance");
        scrollView.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        scrollView.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxScrollViewModule, DxScrollViewComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxScrollViewComponent) scrollView: DxScrollViewComponent
        registerKeyHandlers () {
            this.scrollView.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.scrollView.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxScrollViewModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [ScrollView Demos](/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scrollview-overview)
- [ScrollView API Reference](/Documentation/ApiReference/UI_Widgets/dxScrollView/)

[tags]scrollView, scroll view, navigation, accessibility, keyboard shortcuts