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
      <td>Switches the widget to the previous view.</td>
   </tr>
    <tr>
      <td>&rarr;</td>
      <td>Switches the widget to the next view.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let tabPanel =  $("#tabPanelContainer").dxTabPanel("instance");
        tabPanel.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        tabPanel.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxTabPanelModule, DxTabPanelComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxTabPanelComponent) tabPanel: DxTabPanelComponent
        ngAfterViewInit () {
            this.tabPanel.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.tabPanel.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTabPanelModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [TabPanel Demos](/Demos/WidgetsGallery/#demo/navigation-tab_panel-overview)
- [TabPanel API Reference](/Documentation/ApiReference/UI_Widgets/dxTabPanel/)

[tags]tab panel, tabPanel, navigation, accessibility, keyboard shortcuts