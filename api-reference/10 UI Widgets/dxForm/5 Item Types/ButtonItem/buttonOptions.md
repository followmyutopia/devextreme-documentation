===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->dxButton_Options<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the button. 
<!--/shortDescription-->

<!--fullDescription-->
See the [Button configuration](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/) for options that you can specify in this object.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                itemType: "button",
                buttonOptions: {
                    text: "Do Something",
                    type: "success",
                    onClick: function () {
                        // Implement your logic here
                    }
                }
            }, 
            // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-form ...>
        <dxi-item
            itemType="button"
            [buttonOptions]="buttonOptions">
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        buttonOptions = {
            text: "Do Something",
            type: "success",
            onClick: function () {
                // Implement your logic here
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

#include widgets-config-object-option-note
<!--/fullDescription-->