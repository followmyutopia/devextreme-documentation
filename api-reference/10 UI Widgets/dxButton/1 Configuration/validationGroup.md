===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the name of the [validation group](/Documentation/ApiReference/UI_Widgets/dxValidationGroup/) to be accessed in the [click](/Documentation/ApiReference/UI_Widgets/dxButton/Events/#click) event handler.
<!--/shortDescription-->

<!--fullDescription-->
When using a button to validate several editors on a page, the button must "know" in which validation group these editors are located. If the Knockout or AngularJS approach is used, add the button to the **div** element that represents the target validation group. When using the jQuery approach, specify the **validationGroup** configuration option for the button. Assign the validation group name specified for the **validationGroup** option of the [validators](/Documentation/ApiReference/UI_Widgets/dxValidator/) that extend the editors to be validated. 

#####See Also#####
- [Validate Several Editor Values](/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Validate_Several_Editor_Values)

<!--/fullDescription-->