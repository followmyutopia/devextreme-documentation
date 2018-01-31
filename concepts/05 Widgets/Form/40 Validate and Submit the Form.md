The **Form** widget uses the built-in validation engine to validate form item values. You can attach validation rules to a simple item using its [validationRules](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#validationRules) option. You can do it when you [create items explicitly](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Create_a_Simple_Item)...

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
    import { DxFormModule } from 'devextreme-angular';
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
    import { DxFormModule } from 'devextreme-angular';
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

[note] The [RequiredRule](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/) is attached to a form item implicitly if the [isRequired](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#isRequired) option of this item is set to **true**.

A single **Form** editor is validated individually once its value is changed. If the value fails to pass the validation check, the editor displays an error message. Note that in addition, you can call the [validate()](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#validate) method to validate all **Form** editors at once. In this case, the **Form** can display all occurred validation errors in the bottom, but only if you set the [showValidationSummary](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showValidationSummary) option to **true**. 

<div class="simulator-desktop-container" data-view="Content/Applications/18_1/UIWidgets/dxForm/Validation/markup.html, Content/Applications/18_1/UIWidgets/dxForm/Validation/script.js, Content/Applications/18_1/UIWidgets/dxForm/common-styles.css"></div>

Commonly, **Form** editors should be submitted to the server after being successfully validated on the client. This scenario is supported by the [Button](/Documentation/Guide/Widgets/Button/Overview/) widget out of the box. Wrap both **Form** and **Button** widgets in the [`<form>`](http://www.w3schools.com/html/html_forms.asp) tag. Then, bind the **Button** to the inner validation group of the **Form** using the [validationGroup](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#validationGroup) option. After that, pass **true** to the [useSubmitBehavior](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#useSubmitBehavior) option of the **Button** to activate the submit behavior. In this case, a click on the **Button** validates all **Form** editors, and if they are valid, submits the HTML form to the server.

---
##### jQuery

    <!--HTML--><form action="/Login" method="post">
        <div id="formWidget"></div>
        <div id="validateSubmitButton"></div>
    </form>

    <!--JavaScript-->
    $(function () {
        $("#formWidget").dxForm({
            // ...
            validationGroup: "groupName"
        });
    
        $("#validateSubmitButton").dxButton({
            // ...
            validationGroup: "groupName",
            useSubmitBehavior: true
        });
    });

##### Angular

    <!--HTML-->
    <form action="/Login" method="post">
        <dx-form ...
            validationGroup="groupName">
            <!-- ... -->
        </dx-form>
        <dx-button ...
            validationGroup="groupName"
            [useSubmitBehavior]="true">
        </dx-button>
    </form>

    <!--TypeScript-->
    import { DxFormModule, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule,
            DxButtonModule
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