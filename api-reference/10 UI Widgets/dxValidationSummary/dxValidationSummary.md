<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_validation_summary">ui/validation_summary</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A widget for displaying the result of checking [validation rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) for editors.
<!--/shortDescription-->

<!--fullDescription-->
This widget has a collection of items that present the validation errors that currently exist in a validation group or the ViewModel to which the widget is related.

![dxValidationSummary Widget](/Content/images/doc/17_1/Common/dxValidationSummary.png)

You can create the **ValidationSummary** widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->$(function() {
            var validationGroupName = "sampleGroup";
            $("#textBox1").dxTextBox({ name: 'FirstName' })
                .dxValidator({
                    validationRules: [
                        // ...
                    ],
                    validationGroup: validationGroupName
                });
            $("#textBox2").dxTextBox({ name: 'LastName' })
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
                validationGroup: validationGroupName,
                text: 'Validate',
                onClick: function validate (params) {
                    params.validationGroup.validate();
                }
            });
        });

        <!--HTML--><div id="textBox1"></div>
        <div id="textBox2"></div>
        <div id="summary"></div>
        <div id="button"></div>

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

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
            <div dx-button="{
                text: 'Validate',
                onClick: validate
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.validate = function validate (params) {
                    params.validationGroup.validate();
                };
            });

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

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
            <div data-bind="dxButton: {
                text: 'Validate',
                onClick: function validate (params) {
                    params.validationGroup.validate();
                }
            }"></div>
        </div>

- [**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

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

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

The summary items are displayed using the default item template that is based on the **message** field of the broken validation rule. However, you can use a custom item template. 

#####See Also#####
- [template](/Documentation/ApiReference/Common/Object_Structures/template/)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

[note]The currently existing validation errors are not only the errors that are discovered during the current validation, but also the validation errors that are discovered during the earlier validations if the not-valid values are not changed since then.

To learn more on how to create the **ValidationSummary** widget and associate it with the required validation group or ViewModel, refer to the [Display Validation Errors](/Documentation/Guide/Widgets/Common/UI_Widgets/Validation/#Display_Validation_Errors) and [Validate View Model](/Documentation/Guide/Widgets/Common/UI_Widgets/Validation/#Validate_View_Model) topics.

<a href="https://www.youtube.com/watch?v=xbn_NbeB5es&index=34&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Display Validation Errors](/Documentation/Guide/Widgets/Common/UI_Widgets/Validation/#Display_Validation_Errors)
- [Display Validation Errors - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Validation_-_MVVM_Approach/#Display_Validation_Errors)
- [Validate View Model](/Documentation/Guide/Widgets/Common/UI_Widgets/Validation/#Validate_View_Model)
- [Validate View Model - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Validation_-_MVVM_Approach/#Validate_View_Model)
- [ASP.NET MVC Controls - Client-Side Data Validation](/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Overview/)
<!--/fullDescription-->