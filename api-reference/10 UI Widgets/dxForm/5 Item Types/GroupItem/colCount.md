===========================================================================
<!--default-->1<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
The count of columns in the group layout.
<!--/shortDescription-->

<!--fullDescription-->
[note]

For extra small screens, this option always equals *1* to make the widget adaptive. Specify the [colCountByScreen](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/colCountByScreen/) option to override this logic.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                itemType: "group",
                items: [ ... ],
                colCountByScreen: {
                    xs: 2
                }
            },
            // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form ... >
        <dxi-item
            itemType="group"
            [items]="[ ... ]">
            <dxo-col-count-by-screen [xs]="2"></dxo-col-count-by-screen>
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

#####See Also#####
- [Columns within a Group](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/#Columns_within_a_Group)
<!--/fullDescription-->