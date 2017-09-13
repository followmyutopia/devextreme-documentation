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
      <td>&larr;&rarr;&uarr;&darr;</td>
      <td>Moves focus to the neighboring tile.</td>
   </tr>
    <tr>
      <td>Home</td>
      <td>Moves focus to the very first tile.</td>
    </tr>
    <tr>
      <td>End</td>
      <td>Moves focus to the very last tile.</td>
    </tr>
    <tr>
      <td>Enter or Space</td>
      <td>Selects the focused tile.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxTileView/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let tileView =  $("#tileViewContainer").dxTileView("instance");
        tileView.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        tileView.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTileViewComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTileViewComponent) tileView: DxTileViewComponent
        registerKeyHandlers () {
            this.tileView.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.tileView.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }

---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [TileView Demos](http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tile_view-overview)
- [TileView API Reference](/Documentation/ApiReference/UI_Widgets/dxTileView/)

[tags]tile view, tileView, accessibility, keyboard shortcuts