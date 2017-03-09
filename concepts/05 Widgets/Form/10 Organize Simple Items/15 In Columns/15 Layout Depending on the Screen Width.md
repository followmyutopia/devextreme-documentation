The **Form** widget enables you to specify different layouts for different screen widths. For this purpose, use the [screenByWidth](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#screenByWidth) function and [colCountByScreen](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#colCountByScreen) option. The **screenByWidth** function returns a size qualifier depending on the screen width. The **colCountByScreen** option establishes the dependency between the size qualifier and the column count.

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO"
            },
            screenByWidth: function (width) {
                if (width < 768)  return "xs";
                if (width < 992)  return "sm";
                if (width < 1200) return "md";
                return "lg";
            },
            colCountByWidth: {
                "xs": 1, "md": 3,
                "sm": 2, "lg": 4
            }
        });
    });

#####See Also#####
- [Form - Configure Simple Items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
- [Form - Organize Simple Items in Groups](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/)
- [Form - Organize Simple Items in Tabs](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/)
- [Form - Add an Empty Space Between Smple Items](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/)
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)