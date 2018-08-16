The **DataGrid** widget uses the build-in validation engine to validate user input. You can attach validation rules using the **columns**.[validationRules](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#validationRules) option which accepts an array of objects with fields described in the [Validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) section. The editor displays an error message if a value fails to pass the validation check.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Full_Name",
                validationRules: [{ type: "required" }]
            }, {
                dataField: "Login",
                validationRules: [{ 
                    type: "stringLength", 
                    min: 3, 
                    message: "Login should be longer than 3 symbols" 
                }]
            },
            // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="Full_Name">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column dataField="Login">
            <dxi-validation-rule
                type="stringLength"
                [min]="3"
                message="Login should be longer than 3 symbols" >
            </dxi-validation-rule>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

The [onRowValidating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowValidating) handler allows you to interfere before a notification that a validation rule has been broken is displayed. For instance, you can perform additional checks in this handler and change the validation result by changing the **isValid** field of the handler parameter. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onRowValidating: function (e) {
                if (e.isValid && e.newData.Login === "Administrator") {
                    e.isValid = false;
                    e.errorText = "Your cannot log in as Administrator";
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        barAdministratorLogin (e) {
            if (e.isValid && e.newData.Login === "Administrator") {
                e.isValid = false;
                e.errorText = "Your cannot log in as Administrator";
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        (onRowValidating)="barAdministratorLogin($event)">
    </dx-data-grid>
    
---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/DataValidation/jQuery/Light/"
}

#####See Also#####
- [Data Validation](/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/)



