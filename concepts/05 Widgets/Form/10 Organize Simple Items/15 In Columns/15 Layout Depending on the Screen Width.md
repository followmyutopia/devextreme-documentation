The **Form** widget enables you to specify different layouts for different screen widths. For this purpose, use the [screenByWidth](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#screenByWidth) function and [colCountByScreen](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#colCountByScreen) option. The **screenByWidth** function returns a size qualifier depending on the screen width. The **colCountByScreen** option establishes the dependency between the size qualifier and the column count.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO",
                hireDate: new Date(2012, 4, 13)
            },
            screenByWidth: function (width) {
                if (width < 768)  return "xs";
                if (width < 992)  return "sm";
                if (width < 1200) return "md";
                return "lg";
            },
            colCountByScreen: {
                "xs": 1, "md": 3,
                "sm": 2, "lg": 4
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [screenByWidth]="getSizeQualifier">
        <dxo-col-count-by-screen [xs]="1" [sm]="2" [md]="3" [lg]="4"></dxo-col-count-by-screen>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO",
            hireDate: new Date(2012, 4, 13)
        }
        getSizeQualifier (width) {
            if (width < 768)  return "xs";
            if (width < 992)  return "sm";
            if (width < 1200) return "md";
            return "lg";
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
- [Form - Organize Simple Items in Tabs](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/)
- [Form - Add an Empty Space Between Smple Items](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/)
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)