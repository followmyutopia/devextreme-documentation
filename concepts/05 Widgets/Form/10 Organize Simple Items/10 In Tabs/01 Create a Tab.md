The **Form** widget allows you to organize items in tabs. In the context of the **Form**, tabs are called ["tabbed items"](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/). A tabbed item can contain [simple items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/), other tabs, [groups](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/) or [empty items](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/). To create a tabbed item, assign *"tabbed"* to the [itemType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/#itemType) option. To specify the collection of tabs, use the [tabs](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/) array. To define items displayed within an individual tab, use its [items](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#items) array. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                hireDate: new Date(2012, 4, 13),
                city: "Los Angeles",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: ["name", {
                itemType: "tabbed",
                tabs: [{
                    title: "Info",
                    items: ["position", "hireDate", "city"]
                }, {
                    title: "Contacts",
                    items: ["phone", "email"]
                }]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item itemType="tabbed">
            <dxi-tab title="Info">
                <dxi-item dataField="position"></dxi-item>
                <dxi-item dataField="hireDate"></dxi-item>
                <dxi-item dataField="city"></dxi-item>
            </dxi-tab>
            <dxi-tab title="Contacts">
                <dxi-item dataField="phone"></dxi-item>
                <dxi-item dataField="email"></dxi-item>
            </dxi-tab>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            hireDate: new Date(2012, 4, 13),
            city: "Los Angeles",
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

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields"
}
