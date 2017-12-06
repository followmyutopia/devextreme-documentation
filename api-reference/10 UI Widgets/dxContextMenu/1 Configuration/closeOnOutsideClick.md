===========================================================================
<!--default-->true<!--/default-->
<!--type-->Boolean | function(event)<!--/type-->
===========================================================================

<!--shortDescription-->
A Boolean value specifying whether or not the widget is closed if a user clicks outside of the context menu.
<!--/shortDescription-->

<!--fullDescription-->
The function passed to this option enables you to specify a custom condition for closing the widget. For instance, you can prevent closing until a user clicks a certain element.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#contextMenuContainer").dxContextMenu({
            // ...
            closeOnOutsideClick: function(e) {
                return e.target === $("#someElement").get()[0];
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxContextMenuModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
        closeOnOutsideClick (e) {
            return e.target === document.getElementById("someElement");
        }
    }
    @NgModule({
         imports: [
             // ...
             DxContextMenuModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-context-menu ...
        (closeOnOutsideClick)="closeOnOutsideClick($event)">
    </dx-context-menu>

---

<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The event that caused widget closing. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/Types/#Event) when you use jQuery.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The required option value.
<!--/typeFunctionReturnDescription-->