The **TextArea** raises four keyboard events: [keyDown](/Documentation/ApiReference/UI_Widgets/dxTextArea/Events/#keyDown), [keyPress](/Documentation/ApiReference/UI_Widgets/dxTextArea/Events/#keyPress), [keyUp](/Documentation/ApiReference/UI_Widgets/dxTextArea/Events/#keyUp) and [enterKey](/Documentation/ApiReference/UI_Widgets/dxTextArea/Events/#enterKey). Within the functions that handle them, you can access the original keyboard events. If you are _not_ going to change the functions during the lifetime of the widget, assign them to the respective widget options.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            onKeyDown: function (e) {
                var keyCode = e.event.key;
                // Event handling commands go here
            },
            onKeyPress: function (e) {
                var keyCode = e.event.key;
                // Event handling commands go here
            },
            onKeyUp: function (e) {
                var keyCode = e.event.key;
                // Event handling commands go here
            },
            onEnterKey: function (e) {
                // Event handling commands go here
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-area
        (onKeyDown)="onKeyDown($event)"
        (onKeyPress)="onKeyPress($event)"
        (onKeyUp)="onKeyUp($event)"
        (onEnterKey)="onEnterKey($event)">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onKeyDown (e) {
            let keyCode = e.event.key;
            // Event handling commands go here
        }
        onKeyPress (e) {
            let keyCode = e.event.key;
            // Event handling commands go here
        }
        onKeyUp (e) {
            let keyCode = e.event.key;
            // Event handling commands go here
        }
        onEnterKey (e) {
            // Event handling commands go here
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTextAreaModule
         ],
         // ...
     })

---

If you are going to change the handling functions at runtime, or if you need to attach several functions to a single event, use the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxTextArea/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var keyDownHandler1 = function (e) {
        var keyCode = e.event.key;
        // First handler of the "keyDown" event
    };

    var keyDownHandler2 = function (e) {
        var keyCode = e.event.key;
        // Second handler of the "keyDown" event
    };

    $("#textAreaContainer").dxTextArea("instance")
        .on("keyDown", keyDownHandler1)
        .on("keyDown", keyDownHandler2);

You can also implement handlers for other keys using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxTextArea/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let textArea =  $("#textAreaContainer").dxTextArea("instance");
        textArea.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        textArea.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxTextAreaModule, DxTextAreaComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxTextAreaComponent, { static: false }) textArea: DxTextAreaComponent
        // Prior to Angular 8
        // @ViewChild(DxTextAreaComponent) textArea: DxTextAreaComponent
        ngAfterViewInit () {
            this.textArea.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.textArea.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTextAreaModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [TextArea - Handle the Value Change Event](/Documentation/Guide/Widgets/TextArea/Handle_the_Value_Change_Event/)
- [TextArea Demos](/Demos/WidgetsGallery/#demo/editors-text_area-overview)

[tags]textArea, text area, editor, keyboard events, keyup, keydown, keypress, enterkey
