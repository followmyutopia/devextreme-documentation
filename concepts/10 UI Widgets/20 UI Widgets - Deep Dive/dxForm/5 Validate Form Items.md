<article>
The **Form** widget uses the **DevExtreme validation engine** to validate form item values. You can specify validation rules for each form item using the [validationRules](/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/#validationRules) option of the item. You can specify validation rules when defining form items manually,

#####See Also#####
- [Validation Engine](/Documentation/Guide/UI_Widgets/Common/Validation/)
- [Validation Engine - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Validation_-_MVVM_Approach/)

<!---->

    <!--JavaScript-->
    var formOptions = {
        formData: employeeData,
        items: [
            {
                dataField: "FirstName",
                validationRules: [
                    {
                        type: "required",
                        message: "First Name is required"
                    },
                    {
                        type: "pattern",
                        pattern: "^[a-zA-Z]+$",
                        message: "The name should not contain digits"
                    }
                ]
            },
            . . .
        ]
    }

or when customizing automatically generated items.

    <!--JavaScript-->
    var formOptions = {
        formData: employeeData,
        customizeItem: function(item){
            if(item.dataField === "FirstName" || item.dataField === "LastName"){
                item.validationRules = [
                    {
                        type: "required",
                        message: "The value is required"
                    },
                    {
                        type: "pattern",
                        pattern: "^[a-zA-Z]+$",
                        message: "The value should not contain digits"
                    }
                ]
            }
            . . .
        }
    }

The [RequiredRule](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/) validation rule is automatically applied to a form item, if the [isRequired](/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/#isRequired) option of this item is set to *true*.

    var formOptions = {
        formData: employeeData,
        items: [
            {
                dataField: "FirstName",
                isRequired: true
            },
            . . .
        ]
    }

Each editor of the form is automatically validated when its value has been updated. However, you can validate the entire form using the [validate()](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#validate) method. Once the form has been validated, validation information is displayed at each editor that does not satisfy validation rules. In addition, if you assign *true* to the [showValidationSummary](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showValidationSummary) option, the widget displays validation summary at the bottom of the form.

    <!--JavaScript-->
    // Get form instance
    . . .
    formInstance.validate();

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxForm/Validation/markup.html, Content/Applications/16_1/UIWidgets/dxForm/Validation/script.js, Content/Applications/16_1/UIWidgets/dxForm/common-styles.css"></div>
</article>