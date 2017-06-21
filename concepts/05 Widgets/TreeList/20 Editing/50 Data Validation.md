The **TreeList** widget uses the build-in validation engine to validate user input. You can attach validation rules using the **columns** | [validationRules](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#validationRules) option which accepts an array of objects with fields described in the [Validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) section. The editor displays an error message if a value fails to pass the validation check.

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
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

The [onRowValidating](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowValidating) handler allows you to interfere before a notification that a validation rule has been broken is displayed. For instance, you can perform additional checks in this handler and change the validation result by changing the **isValid** field of the handler parameter. 

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            onRowValidating: function(e) {
                if(e.isValid) {
                    if(e.newData.Login === "Administrator") {
                        e.isValid = false;
                        e.errorText = "Your cannot log in as Administrator";
                    }
                }
            }
        });
    });

#####See Also#####
- [Data Validation](/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/)



