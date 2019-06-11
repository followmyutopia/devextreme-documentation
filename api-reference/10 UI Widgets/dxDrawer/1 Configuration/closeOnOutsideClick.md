<!--id-->dxDrawer.Options.closeOnOutsideClick<!--/id-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean | function(event)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether to close the drawer if a user clicks or taps the view area.
<!--/shortDescription-->

<!--fullDescription-->
The function passed to this option enables you to specify a custom condition for widget closing. For instance, you can prevent closing until a user clicks a specific element on the view:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#drawerContainer").dxDrawer({
            // ...
            closeOnOutsideClick: function(e) {
                return e.target === $("#someElement").get()[0];
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxDrawerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        drawer_closeOnOutsideClick(e) {
            return e.target === document.getElementById("someElement");
        }
    }
    @NgModule({
         imports: [
             // ...
             DxDrawerModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-drawer ...
        [closeOnOutsideClick]="drawer_closeOnOutsideClick">
    </dx-drawer>

---

<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The raised event. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
**true** if the widget should be closed; otherwise **false**.
<!--/typeFunctionReturnDescription-->