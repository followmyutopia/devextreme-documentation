<!--id-->CompareRule<!--/id-->
===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
A validation rule that demands that a validated editor has a value that is equal to a specified expression.
<!--/shortDescription-->

<!--fullDescription-->
To specify the expression that the validated field must match, set the rule's [comparisonTarget](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CompareRule/#comparisonTarget) configuration option. Assign a function to this option. The validated value will be compared to the function's return value. The comparison will be performed by using the operator that is set for the [comparisonType](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CompareRule/#comparisonType) option.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Validation/Overview/jQuery/Light/"
}

#####See Also#####
- [Data Validation](/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/)
<!--/fullDescription-->