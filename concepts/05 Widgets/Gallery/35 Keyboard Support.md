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
      <td>Shows the previous image.</td>
    </tr>
    <tr>
      <td>&rarr;</td>
      <td>Shows the following image.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxGallery/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let gallery =  $("#galleryContainer").dxGallery("instance");
        gallery.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        gallery.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxGalleryModule, DxGalleryComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxGalleryComponent) gallery: DxGalleryComponent
        registerKeyHandlers () {
            this.gallery.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.gallery.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxGalleryModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-gallery-overview)
- [Gallery API Reference](/Documentation/ApiReference/UI_Widgets/dxGallery/)

[tags]gallery, accessibility, keyboard shortcuts