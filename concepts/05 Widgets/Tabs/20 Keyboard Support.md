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
      <td>&larr;</td>
      <td>Moves focus to the previous tab.</td>
   </tr>
    <tr>
      <td>&rarr;</td>
      <td> Moves focus to the next tab.</td>
    </tr>
    <tr>
      <td>Shift + Mouse Wheel</td>
      <td>Scrolls the tabs left/right if the <a href="/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#scrollingEnabled">scrollingEnabled</a> option is <b>true</b>.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxTabs/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let tabs =  $("#tabsContainer").dxTabs("instance");
        tabs.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        tabs.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTabsModule, DxTabsComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTabsComponent) tabs: DxTabsComponent
        registerKeyHandlers () {
            this.tabs.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.tabs.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTabsModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [Tabs Demos](http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tabs-overview)
- [Tabs API Reference](/Documentation/ApiReference/UI_Widgets/dxTabs/)

[tags]tabs, navigation, accessibility, keyboard shortcuts