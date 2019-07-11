<!--id-->dxValidationGroup<!--/id-->
===========================================================================
<!--module-->ui/validation_group<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->DOMComponent<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ValidationGroup** is a widget that allows you to validate several editors simultaneously.
<!--/shortDescription-->

<!--fullDescription-->
[note]Nested validation groups are not supported.

#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function() {
        var validationGroupName = "sampleGroup";
        $("#textBox1").dxTextBox({ name: "FirstName" })
            .dxValidator({
                validationRules: [
                    // ...
                ],
                validationGroup: validationGroupName
            });
        $("#textBox2").dxTextBox({ name: "LastName" })
            .dxValidator({
                validationRules: [
                    // ...
                ],
                validationGroup: validationGroupName
            });
        $("#summary").dxValidationSummary({
            validationGroup: validationGroupName
        });
        $("#button").dxButton({
            validationGroup: validationGroupName
            //...
        });
    });

    <!--HTML--><div id="textBox1"></div>
    <div id="textBox2"></div>
    <div id="summary"></div>
    <div id="button"></div>

##### Angular

    <!--HTML-->
    <dx-validation-group>
        <dx-text-box name="FirstName">
            <dx-validator>
                <dxi-validation-rule type="required" message="First name is required"></dxi-validation-rule>
                ...
            </dx-validator>
        </dx-text-box>
        <dx-text-box name="LastName">
            <dx-validator>
                <dxi-validation-rule type="required" message="Last name is required"></dxi-validation-rule>
                ...
            </dx-validator>
        </dx-text-box>
        <dx-validation-summary></dx-validation-summary>
        <dx-button></dx-button>
    </dx-validation-group>

    <!--TypeScript-->
    import { DxValidationGroupModule, DxTextBoxModule, DxButtonModule, DxValidatorModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxValidationGroupModule,
            DxTextBoxModule,
            DxButtonModule,
            DxValidatorModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div dx-validation-group="{ }" ng-controller="DemoController">
        <div dx-text-box="{ name: 'FirstName' }"
            dx-validator="{
                validationRules: [
                    // ...
                ]
            }">  
        </div>
        <div dx-text-box="{ name: 'LastName' }"
            dx-validator="{
                validationRules: [
                    // ...
                ]
            }">
        </div>
        <div dx-validation-summary="{  }"></div>
        <div dx-button="{ }"></div>
    </div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div data-bind="dxValidationGroup: { }" >
        <div data-bind="dxTextBox: { name: 'FirstName' },
            dxValidator: {
                validationRules: [
                    // ...
                ]
            }">  
        </div>
        <div data-bind="dxTextBox: { name: 'LastName' },
            dxValidator: {
                validationRules: [
                    // ...
                ]
            }">
        </div>  
        <div data-bind="dxValidationSummary: { }"></div>
        <div data-bind="dxButton: { }"></div>
    </div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->using (Html.DevExtreme().ValidationGroup()) {
        @(Html.DevExtreme().TextBox()
            .Name("FirstName")
        )
        @(Html.DevExtreme().TextBox()
            .Name("LastName")
        )
        @(Html.DevExtreme().ValidationSummary())
        @(Html.DevExtreme().Button()
            .Text("Validate")
            .OnClick(@<text>
                function validate (params) {
                    params.validationGroup.validate();
                }
            </text>)
        )
    }

    <!--Razor VB-->@Using (Html.DevExtreme().ValidationGroup())
        @(Html.DevExtreme().TextBox() _
            .Name("FirstName")
        )
        @(Html.DevExtreme().TextBox() _
            .Name("LastName")
        )
        @(Html.DevExtreme().ValidationSummary())
        @(Html.DevExtreme().Button() _
            .Text("Validate") _
            .OnClick("validate")
        )
    End Using
    <script>
        function validate(params) {
            params.validationGroup.validate();
        }
    </script>

---

 

#####See Also#####
- [Data Validation](/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/)
- [ASP.NET MVC Controls - Validate a Group of Editors](/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Validate_a_Group_of_Editors/)

You can use the [DevExpress.validationEngine.validateGroup(group)](/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#validateGroupgroup) method to validate a particular validation group by passing its instance as a parameter.

    <!--JavaScript-->DevExpress.validationEngine.validateGroup($("#sampleGroup").dxValidationGroup("instance"));

In addition, you can access a validation group's configuration using the [DevExpress.validationEngine.getGroupConfig(group)](/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#getGroupConfiggroup) method. The returned configuration exposes the **validators** included to the group, the **validate()** method to validate the editors that are associated with the validators and the **validated** event that occurs after the group is validated.

<a href="https://www.youtube.com/watch?v=xbn_NbeB5es&index=34&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>
<!--/fullDescription-->