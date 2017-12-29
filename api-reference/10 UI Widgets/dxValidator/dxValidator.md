===========================================================================
<!--module-->ui/validator<!--/module-->
<!--export-->default<!--/export-->
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

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function() {
        $("#textBox1").dxTextBox({ })
            .dxValidator({
                validationRules: [
                    // ...
                ]
            });
    });

    <!--HTML--><div id="textBox1"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-text-box>
        <dx-validator>
            <dxi-validation-rule type="required" message="Value is required"></dxi-validation-rule>
        </dx-validator>
    </dx-text-box>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-text-box="{ }"
            dx-validator="{
                validationRules: [
                // ...
            ]
        }">
    </div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxTextBox: { },
        dxValidator: {
            validationRules: [
                // ...
            ]
        }">  
    </div>

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#####See Also#####
- [Validate an Editor Value](/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Validate_an_Editor_Value)
- [ASP.NET MVC Controls - Client-Side Data Validation](/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Overview/)

The learn the validation rules that can be defined using the **Validator** widget for an editor, refer to the [Validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) section.

The editors that are associated with the **Validator** widgets are automatically validated against the specified rules each time the event assigned to the editor's **valueChangeEvent** option occurs. In addition, several editors can be validated at once. To learn how to do this, refer to the [Validate Several Editor Values](/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Validate_Several_Editor_Values) topic.

#####See Also#####
- [Validate Several Editor Values](/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Validate_Several_Editor_Values)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editorsvalidationvalidationvalidation/"
}
<a href="https://www.youtube.com/watch?v=xbn_NbeB5es&index=34&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>
<!--/fullDescription-->