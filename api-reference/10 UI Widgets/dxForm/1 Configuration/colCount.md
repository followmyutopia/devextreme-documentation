===========================================================================
<!--default-->1<!--/default-->
<!--acceptValues-->'auto'<!--/acceptValues-->
<!--type-->Number | String<!--/type-->
===========================================================================

<!--shortDescription-->
The count of columns in the form layout.
<!--/shortDescription-->

<!--fullDescription-->
[note]

For extra small screens, this option always equals *1* to make the widget adaptive. To override this logic, specify the [colCountByScreen](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/colCountByScreen/) option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            colCountByScreen: {
                xs: 2
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form ... >
        <dxo-col-count-by-screen [xs]="2"></dxo-col-count-by-screen>
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

#include common-ref-enum with {
    enum: "`Mode`",
    values: "`Auto`"
}

#####See Also#####
- [Organize Simple Items In Columns](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/#Fixed_and_Floating_Number_of_Columns)
<!--/fullDescription-->