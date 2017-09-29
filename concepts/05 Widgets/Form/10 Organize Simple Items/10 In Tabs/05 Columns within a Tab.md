The content of a tab can be organized in columns. The [colCount](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#colCount) option instructs the tab about how many columns it must have. Note that the entire **Form** layout can also be organized in columns if the [colCount](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#colCount) option is declared on the root level. In this case, use the [colSpan](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/#colSpan) option to define how many general columns the tab must span. 

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
            // Splits the Form layout in two columns
            colCount: 2,
            items: ["name", {
                itemType: "tabbed",
                colSpan: 2,
                tabs: [{
                    title: "Info",
                    // Makes this tab span both general columns
                    colSpan: 2,
                    // Organizes items inside this tab in three columns
                    colCount: 3,
                    items: ["position", "hireDate", "city"]
                }, {
                    title: "Contacts",
                    colCount: 2,
                    items: ["phone", "email"]
                }]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [colCount]="2"> <!-- Splits the Form layout in two columns -->
        <dxi-item dataField="name"></dxi-item>
        <dxi-item itemType="tabbed" [colSpan]="2">
            <dxi-tab
                title="Info"
                [colSpan]="2" <!-- Makes this tab span both general columns -->
                [colCount]="3" <!-- Organizes items inside this tab in three columns -->
                [items]="['position', 'hireDate', 'city']">
            </dxi-tab>
            <dxi-tab
                title="Contacts"
                [colCount]="2"
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