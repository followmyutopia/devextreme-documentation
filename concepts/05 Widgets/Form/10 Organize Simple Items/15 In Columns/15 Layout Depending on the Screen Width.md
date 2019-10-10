The **Form** widget enables you to specify different layouts for different screen widths. For this purpose, use the [screenByWidth](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#screenByWidth') function and [colCountByScreen](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/colCountByScreen/colCountByScreen.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#colCountByScreen') option. The **screenByWidth** function returns a size qualifier depending on the screen width. The **colCountByScreen** option establishes the dependency between the size qualifier and the column count.

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
    import { DxFormModule } from "devextreme-angular";
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

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Form/ColumnsAdaptability/jQuery/Light/"
}

#####See Also#####
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items/Configure%20Simple%20Items.md '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
- [Form - Organize Simple Items in Groups](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups/In%20Groups.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/')
- [Form - Organize Simple Items in Tabs](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs/In%20Tabs.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/')
- [Form - Add an Empty Space Between Smple Items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/')
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm/dxForm.md '/Documentation/ApiReference/UI_Widgets/dxForm/')