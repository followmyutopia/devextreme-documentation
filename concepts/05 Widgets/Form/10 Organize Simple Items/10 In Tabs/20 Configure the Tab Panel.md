For displaying tabs, the **Form** uses the [TabPanel](/Documentation/Guide/Widgets/TabPanel/Overview/) widget. Therefore, you can specify any [options of the TabPanel](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/) in the [tabPanelOptions](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/#tabPanelOptions) object.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                // ...
            },
            items: ["firstName", "lastName", {
                itemType: "tabbed",
                tabPanelOptions: {
                    height: 250,
                    onTitleClick: function (e) {
                        // ...
                    }
                },
                tabs: [ ... ]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item itemType="tabbed"
            [tabPanelOptions]="{
                height: 250,
                onTitleClick: tabPanel_tabTitleClick
            }">
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            // ...
        }
        tabPanel_tabTitleClick (e) {
            // ...
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

#####See Also#####
- [Form - Configure Simple Items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
- [Form - Organize Simple Items in Groups](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/)
- [Form - Organize Simple Items in Columns](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/)
- [Form - Add an Empty Space Between Smple Items](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)