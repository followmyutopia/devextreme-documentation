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
    import { ..., ViewChild } from '@angular/core';
    import { DxTabPanelModule, DxTabPanelComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTabPanelComponent) tabPanel: DxTabPanelComponent
        registerKeyHandlers () {
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
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [TabPanel Demos](http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tab_panel-overview)
- [TabPanel API Reference](/Documentation/ApiReference/UI_Widgets/dxTabPanel/)

[tags]tab panel, tabPanel, navigation, accessibility, keyboard shortcuts