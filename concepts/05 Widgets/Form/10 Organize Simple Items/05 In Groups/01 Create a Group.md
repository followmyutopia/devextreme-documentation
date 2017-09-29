In the context of the **Form** widget, a group is called ["group item"](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/). A group item can contain [simple items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/), other groups, [tabs](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/) or [empty items](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/). To create a group item, assign *"group"* to the [itemType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#itemType) option. Items nested in the group are configured in the [items](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#items) array. To add a caption to the group, specify the [caption](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#caption) option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: [{
                itemType: "group",
                caption: "Personal Data",
                items: ["firstName", "lastName", "position"]
            }, {
                itemType: "group",
                caption: "Contacts",
                items: ["phone", "email"]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item
            itemType="group"
            caption="Personal Data"
            [items]="['firstName', 'lastName', 'position']">
        </dxi-item>
        <dxi-item
            itemType="group"
            caption="Contacts"
            [items]="['phone', 'email']">
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO",
            phone: "+1(213) 555-9392",
            email: "jheart@dx-email.com"
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

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>