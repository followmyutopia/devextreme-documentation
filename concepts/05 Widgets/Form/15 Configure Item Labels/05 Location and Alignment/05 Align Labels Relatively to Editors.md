The **Form** widget displays labels on the left side of their editors by default. Use the [labelLocation](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#labelLocation) option to relocate all labels or the **label**.[location](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/label/#location) option to relocate individual labels.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(360)684-1334"
            },
            labelLocation: "top", // or "left" | "right"
            items: ["firstName", "lastName", { 
                dataField: "phone",
                label: { location: "left" }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        labelLocation="top"> <!-- or "left" | "right" -->
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item dataField="phone">
            <dxo-label
                location="left">
            </dxo-label>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            phone: "+1(360)684-1334"
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

If the label is above the editor, it can be aligned horizontally in relation to the editor using the **label**.[alignment](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/label/#alignment) option.

---
##### jQuery

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

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        labelLocation="top">
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item dataField="phone">
            <dxo-label
                alignment="center"> <!-- or "left" | "right" -->
            </dxo-label>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            phone: "+1(360)684-1334"
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

A label placed on the left or right side of the editor is centered vertically in most cases, except for labels that are coupled with editors that occupy much space, like the [Calendar](/Documentation/Guide/Widgets/Calendar/Overview/), [TextArea](/Documentation/Guide/Widgets/TextArea/Overview/) or [RadioGroup](/Documentation/Guide/Widgets/RadioGroup/Overview/). These labels are aligned at the top, but you can center them using the following code:

    <!--CSS-->
    .dx-label-h-align {
        align-items: center;
    }
