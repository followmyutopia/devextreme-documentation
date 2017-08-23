By default, the **Form** widget displays labels at the left side of their editors. To relocate all labels, use the [labelLocation](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#labelLocation) option. You can do the same to an individual label using the **label**.[location](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/label/#location) option.

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(360)684-1334"
            },
            labelLocation: "top", // or "left" | "right",
            items: ["firstName", "lastName", { 
                dataField: "phone",
                label: { location: "left" }
            }]
        });
    });

If the label is located at the top of the editor, it can be aligned relatively to the editor in the horizontal direction using the **label**.[alignment](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/label/#alignment) option.

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(360)684-1334"
            },
            labelLocation: "top",
            items: ["firstName", "lastName", { 
                dataField: "phone",
                label: { 
                    alignment: "center" // or "left" | "right" 
                }
            }]
        });
    });