---
id: dxFormTabbedItem.tabs.colCount
type: Number
default: 1
---
---
##### shortDescription
The count of columns in the tab layout.

---
[note]

For extra small screens, this option always equals *1* to make the widget adaptive. Specify the [colCountByScreen](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/colCountByScreen/) option to override this logic.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                itemType: "tabbed",
                tabs: [{
                    // ...
                    colCountByScreen: {
                        xs: 2
                    }
                },
                // ...
                ],
            },
            // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form ... >
        <dxi-item
            itemType="tabbed">
            <dxi-tab ... >
                <dxo-col-count-by-screen [xs]="2"></dxo-col-count-by-screen>
            </dxi-tab>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

[/note]

- [Columns within a Tab](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/#Columns_within_a_Tab)