The **Form** widget allows you to specify custom templates for an individual tab and its content. For this purpose, assign callback functions to the [tabTemplate](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#tabTemplate) and [template](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#template) options, respectively. With [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS) and [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout), you can declare templates using a different technique described in the [Implement a Custom Template](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/#Implement_a_Custom_Template) topic.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                birthDate: new Date(1964, 3, 15),
                position: "CEO",
                city: "Los Angeles",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: ["name", {
                itemType: "tabbed",
                tabs: [{
                    title: "Data Protection Policy",
                    tabTemplate: function (itemData, itemIndex, itemElement) {
                        itemElement.append("<p style='color: red'>" + itemData.title);
                    },
                    template: function (itemData, itemIndex, itemElement) {
                        itemElement.append("<p><i>By filling out this form," 
                                            + " you agree to the terms of the" 
                                            + "<a href='#'>Data Protection Policy</a></i></p>");
                    }
                }, {
                    title: "Info",
                    items: ["position", "birthDate", "city"]
                }, {
                    title: "Contacts",
                    items: [ "phone", "email"]
                }]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item itemType="tabbed" [colSpan]="2">
            <dxi-tab
                title="Data Protection Policy"
                tabTemplate="tab"
                [template]="'tabContent'">
                <div *dxTemplate="let tabData of 'tab'; let i = index">
                    <p style="color:red">{{tabData.title}}</p>
                </div>
                <div *dxTemplate="let data of 'tabContent'; let i = index">
                    <p>
                        <i>By filling out this form, you agree
                        to the terms of the <a href='#'>Data Protection Policy</a></i>
                    </p>
                </div>
            </dxi-tab>
            <dxi-tab
                title="Info"
                [items]="['position', 'hireDate', 'city']">
            </dxi-tab>
            <dxi-tab
                title="Contacts"
                [items]="['phone', 'email']">
            </dxi-tab>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            birthDate: new Date(1964, 3, 15),
            position: "CEO",
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