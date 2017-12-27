===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean | function()<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether to close the drop-down menu if a user clicks outside it.
<!--/shortDescription-->

<!--fullDescription-->
The function passed to this option enables you to specify a custom condition for widget closing. For instance, you can prevent closing until a user clicks a certain element.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#lookupContainer").dxLookup({
            // ...
            closeOnOutsideClick: function(e) {
                return e.target === $("#someElement").get()[0];
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxLookupModule } from 'devextreme-angular';
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
             DxLookupModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-lookup ...
        (closeOnOutsideClick)="closeOnOutsideClick($event)">
    </dx-lookup>

---

<!--/fullDescription-->
<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
**true** if the menu should be closed; otherwise **false**.
<!--/typeFunctionReturnDescription-->