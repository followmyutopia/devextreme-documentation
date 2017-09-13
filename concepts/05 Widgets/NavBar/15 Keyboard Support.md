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
      <td>Moves focus to the previous item.</td>
   </tr>
    <tr>
      <td>&rarr;</td>
      <td> Moves focus to the next item.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxNavBar/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let navBar =  $("#navBarContainer").dxNavBar("instance");
        navBar.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        navBar.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxNavBarComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxNavBarComponent) navBar: DxNavBarComponent
        registerKeyHandlers () {
            this.navBar.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.navBar.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }

---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [NavBar Demos](http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-navbar-overview/ios7)
- [NavBar API Reference](/Documentation/ApiReference/UI_Widgets/dxNavBar/)

[tags]nav bar, navBar, navigation bar, accessibility, keyboard shortcuts