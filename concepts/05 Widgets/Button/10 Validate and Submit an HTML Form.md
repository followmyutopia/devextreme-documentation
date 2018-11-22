[note]In MVC projects, you can configure the same features using [ASP.NET MVC Controls](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/). See [this topic](/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Validate_and_Submit_an_HTML_Form/) for details.

Commonly, editors nested into an HTML form are supposed to be validated on the client and then submitted to the server. The **Button** widget supports this scenario out of the box. Place the **Button** on the HTML form and set the [useSubmitBehavior](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#useSubmitBehavior) option to **true**.

---
##### jQuery

    <!--HTML-->
    <form action="/Login" method="post">
        <div id="login"></div>
        <div id="password"></div>
        <div id="validateAndSubmit"></div>
    </form>

    <!--JavaScript-->$(function() {
        $("#login").dxTextBox({
            name: "Login"
        }).dxValidator({
            validationRules: [
                { type: "required" }
            ]
        });
    
        $("#password").dxTextBox({
            name: "Password",
            mode: "password"
        }).dxValidator({
            validationRules: [
                { type: "required" }
            ]
        });
    
        $("#validateAndSubmit").dxButton({
            text: "Submit",
            type: "success",
            useSubmitBehavior: true
        });
    });

##### Angular

    <!--HTML-->
    <form action="/Login" method="post">
        <dx-text-box name="Login">
            <dx-validator>
                <dxi-validation-rule type="required"></dxi-validation-rule>
            </dx-validator>
        </dx-text-box>
        <dx-text-box name="Password" mode="password">
            <dx-validator>
                <dxi-validation-rule type="required"></dxi-validation-rule>
            </dx-validator>
        </dx-text-box>
        <dx-button
            text="Submit"
            type="success"
            [useSubmitBehavior]="true">
        </dx-button>
    </form>

    <!--TypeScript-->
    import { DxTextBoxModule, DxValidatorModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule,
            DxValidatorModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <template>
        <form action="/Login" method="post">
            <dx-text-box name="Login">
                <dx-validator>
                    <dx-validation-rule type="required" />
                </dx-validator>
            </dx-text-box>
            <dx-text-box name="Password" mode="password">
                <dx-validator>
                    <dx-validation-rule type="required" />
                </dx-validator>
            </dx-text-box>
            <dx-button
                text="Submit"
                type="success"
                :use-submit-behavior="true" />
        </form>
    </template>
    <script>
    import DxTextBox from "devextreme-vue/text-box";
    import DxValidator, { DxValidationRule } from "devextreme-vue/validator";
    import DxButton from "devextreme-vue/button";

    export default {
        components: {
            DxTextBox,
            DxValidator,
            DxValidationRule,
            DxButton
        }
    }
    </script>

---

Note that the [name](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#name) option of the **TextBox** widgets in the previous code specifies the [name](http://www.w3schools.com/tags/att_input_name.asp) attribute of the underlying `<input>` element.

DevExtreme editors may belong to different [validation groups](/Documentation/ApiReference/UI_Widgets/dxValidationGroup/). To specify which group the **Button** must validate, use the [validationGroup](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#validationGroup) option. If you do not set this option, the **Button** validates all editors whose validation group is not specified.

[note]Although the **Button** may validate different validation groups, it always submits a definite HTML form - the one in which it is nested. To avoid mixing up validated and submitted values, we recommend that a single HTML form contain only a single validation group.

#####See Also#####
- [ASP.NET MVC Controls - Validate and Submit an HTML Form](/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Validate_and_Submit_an_HTML_Form/)
- [Form - Validate and Submit](/Documentation/Guide/Widgets/Form/Validate_and_Submit_the_Form/)
- [Button Demos](/Demos/WidgetsGallery/#demo/actions_and_lists-button-icons)
- [Button API Reference](/Documentation/ApiReference/UI_Widgets/dxButton/)

[tags]button, validate a form, submit a form, submit editors