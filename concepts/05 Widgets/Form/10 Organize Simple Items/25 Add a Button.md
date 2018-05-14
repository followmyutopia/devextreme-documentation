You can add a button that performs a custom action using a [button item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/ButtonItem/) by setting the [itemType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/ButtonItem/#itemType) option to *"button"*. Then, configure the button using the [buttonOptions](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/ButtonItem/#buttonOptions) object which can contain any [**Button** widget option](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/).

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                email: "jheart@dx-email.com"
            },
            colCount: 2,
            items: [
                "name", 
                { itemType: "empty" }, 
                "email", 
                {
                    itemType: "button",
                    alignment: "left",
                    buttonOptions: {
                        text: "Send an Email",
                        onClick: function () {
                            // ...
                        }
                    }
                }
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [colCount]="2">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item itemType="empty"></dxi-item>
        <dxi-item dataField="email"></dxi-item>
        <dxi-item 
            itemType="button" 
            alignment="left"
            [buttonOptions]="buttonOptions">
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            email: "jheart@dx-email.com"
        }
        buttonOptions = {
            text: "Send an Email",
            onClick: function () {
                // ...
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Form/Validation/jQuery/Light/"
}

#####See Also#####
- [Configure Simple Items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
- [Organize Simple Items in Groups](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/)
- [Organize Simple Items in Tabs](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/)
- [Organize Simple Items in Columns](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/)
- [Add an Empty Space](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/)
