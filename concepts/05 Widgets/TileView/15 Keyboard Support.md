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
      <td>Shift + Mouse Wheel</td>
      <td>Scrolls the content left/right if the <a href="/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#direction">direction</a> option is <i>"horizontal"</i>.</td>
    </tr>
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
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxTileViewModule, DxTileViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxTileViewComponent, { static: false }) tileView: DxTileViewComponent
        // Prior to Angular 8
        // @ViewChild(DxTileViewComponent) tileView: DxTileViewComponent
        ngAfterViewInit () {
            this.tileView.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.tileView.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [TileView Demos](/Demos/WidgetsGallery/#demo/navigation-tile_view-overview)
- [TileView API Reference](/api-reference/10%20UI%20Widgets/dxTileView/dxTileView.md '/Documentation/ApiReference/UI_Widgets/dxTileView/')

[tags]tile view, tileView, accessibility, keyboard shortcuts