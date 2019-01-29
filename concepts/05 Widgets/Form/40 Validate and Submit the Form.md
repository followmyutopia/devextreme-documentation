The **Form** widget uses the built-in validation engine to validate form item values. You can attach validation rules to a simple item using its [validationRules](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#validationRules) option when you [create items explicitly](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Create_a_Simple_Item)...

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart"
            },
            items: [{
                dataField: "firstName",
                validationRules: [{
                    type: "required",
                    message: "First Name is required"
                }, {
                    type: "pattern",
                    pattern: "^[a-zA-Z]+$",
                    message: "The name should not contain digits"
                }]
            },
            // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form [(formData)]="employee">
        <dxi-item dataField="firstName">
            <dxi-validation-rule
                type="required"
                message="First Name is required">
            </dxi-validation-rule>
            <dxi-validation-rule
                type="pattern"
                pattern="^[a-zA-Z]+$"
                message="The name should not contain digits">
            </dxi-validation-rule>
        </dxi-item>
        <!-- ... -->
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart"
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

... or when you [customize automatically generated items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Customize_a_Simple_Item).

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart"
            },
            customizeItem: function(item) {
                if(item.dataField === "FirstName" || item.dataField === "LastName") {
                    item.validationRules = [{
                        type: "required",
                        message: "The value is required"
                    }, {
                        type: "pattern",
                        pattern: "^[a-zA-Z]+$",
                        message: "The value should not contain digits"
                    }]
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [customizeItem]="form_customizeItem">
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart"
        }
        form_customizeItem (item) {
            if (item.dataField === "FirstName" || item.dataField === "LastName") {
                item.validationRules = [{
                    type: "required",
                    message: "The value is required"
                }, {
                    type: "pattern",
                    pattern: "^[a-zA-Z]+$",
                    message: "The value should not contain digits"
                }]
            }
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

[note] The [RequiredRule](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/) is attached to a form item implicitly if this item's [isRequired](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#isRequired) option is set to **true**.

A single **Form** editor is validated individually once its value changes. If the value fails to pass the validation check, the editor displays an error message. Note that you can also call the [validate()](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#validate) method to validate all **Form** editors simultaneously. In this case, the **Form** can display all validation errors at the bottom if you set the [showValidationSummary](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showValidationSummary) option to **true**. 

<div class="simulator-desktop-container" data-view="Content/Applications/19_1/UIWidgets/dxForm/Validation/markup.html, Content/Applications/19_1/UIWidgets/dxForm/Validation/script.js, Content/Applications/19_1/UIWidgets/dxForm/common-styles.css"></div>

Usually, **Form** editors should be submitted to the server after being successfully validated on the client. The following code shows how to do this using a [button form item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/ButtonItem/). Note that the **Form** widget is wrapped in the [`<form>`](http://www.w3schools.com/html/html_forms.asp) tag in the markup.

---
##### jQuery

    <!--HTML--><form action="/Login" method="post">
        <div id="formWidget"></div>
    </form>

    <!--JavaScript-->
    $(function () {
        $("#formWidget").dxForm({
            // ...
            validationGroup: "groupName",
            items: [{
                itemType: "button",
                buttonOptions: {
                    text: "Submit the Form",
                    useSubmitBehavior: true
                }
            },
            // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <form action="/Login" method="post">
        <dx-form ...
            validationGroup="groupName">
            <dxi-item 
                itemType="button"
                [buttonOptions]="buttonOptions">
            </dxi-item>
        </dx-form>
    </form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        buttonOptions = {
            text: "Submit the Form",
            useSubmitBehavior: true
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
- [Data Validation](/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/)
- [ASP.NET MVC Controls - Validate and Submit the Form Control](/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Validate_and_Submit_the_Form_Control/)
- [Button - Validate and Submit an HTML Form](/Documentation/Guide/Widgets/Button/Validate_and_Submit_an_HTML_Form/)
- [Form Demos](/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-overview)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)

[tags]form, validation, validation rules, validate, validation summary, validation group, validationGroup, submit form, submit behavior
