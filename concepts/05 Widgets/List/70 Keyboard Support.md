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
      <td>Moves focus to the previous/next item.</td>
    </tr>
    <tr>
      <td>Page Up / Page Down</td>
      <td>Moves focus to the item located a screen above/below the current one.</td>
    </tr>
    <tr>
      <td>Home / End</td>
      <td>Moves focus to the first/last item.</td>
    </tr>
    <tr>
      <td>Enter or Space</td>
      <td><a href="/Documentation/17_2/Guide/Widgets/List/Selection/#User_Interaction">Selects</a> the focused item.</td>
    </tr>
    <tr>
      <td>Shift + &uarr; / &darr;</td>
      <td>Shifts the focused item one item up/down. Active if the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxList/Configuration/#allowItemReordering">allowItemReordering</a> option is set to <i>true</i>.</td>
    </tr>
    <tr>
      <td>Delete</td>
      <td>Removes the focused item. Active if the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxList/Configuration/#allowItemDeleting">allowItemDeleting</a> option is set to <i>true</i>.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let list =  $("#listContainer").dxList("instance");
        list.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        list.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent) list: DxListComponent
        registerKeyHandlers () {
            this.list.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.list.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }

---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [List - Item Deletion - User Interaction](/Documentation/Guide/Widgets/List/Item_Deletion/#User_Interaction)
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

[tags]list, accessibility, keyboard shortcuts