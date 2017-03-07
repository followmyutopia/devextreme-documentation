<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Widget to declare a validator.<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_validator">ui/validator</a><!--/module-->
<!--inherits-->..\DOMComponent\DOMComponent.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A widget that is used to validate the associated DevExtreme editors against the defined validation rules.
<!--/shortDescription-->

<!--fullDescription-->
You can create the **Validator** widget using one of the following approaches.

- **jQuery**  
	Apply the `dxValidator` jQuery plug-in to an editor instance.

		<!--HTML--><div id="textBox1"></div>

	<!--...-->

		<!--JavaScript-->
		 $("#textBox1").dxTextBox({})
			.dxValidator({
                validationRules: []
            });


- **Knockout**  
	Apply the `dxValidator` binding to the div element that is bound to an editor.

		<!--HTML-->
		<div data-bind="dxTextBox: { },
			dxValidator: { validationRules: [] }">  
		</div>

- **AngularJS**  
	Apply the `dx-validator` directive to the div element that represents an editor.

		<!--HTML--><div ng-controller="demoController">
			<div dx-text-box="{  }"
				dx-validator="{ validationRules:  }">  
			</div>
		</div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

#####See Also#####
- [Associate Editor with Validator](/Documentation/Guide/UI_Widgets/Common/Validation/#Associate_Editor_with_Validator)
- [Associate Editor with Validator - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Validation_-_MVVM_Approach/#Associate_Editor_with_Validator)

The learn the validation rules that can be defined using the **Validator** widget for an editor, refer to the [Validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) section.

The editors that are associated with the **Validator** widgets are automatically validated against the specified rules each time the event assigned to the editor's **valueChangeEvent** option occurs. In addition, several editors can be validated at once. To learn how to do this, refer to the [Validate Editor Values](/Documentation/Guide/UI_Widgets/Common/Validation/#Validate_Editor_Values) topic.

#####See Also#####
- [Validate Editor Values](/Documentation/Guide/UI_Widgets/Common/Validation/#Validate_Editor_Values)
- [Validate Editor Values - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Validation_-_MVVM_Approach/#Validate_Editor_Values)

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsvalidationvalidationvalidation/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->