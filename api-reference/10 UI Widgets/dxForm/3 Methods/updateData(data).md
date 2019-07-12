<!--id-->dxForm.updateData(data)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Merges the passed `data` object with [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData). Matching properties in **formData** are overwritten and new properties added.
<!--/shortDescription-->

<!--paramName1-->data<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
Data fields with their new values.
<!--/paramDescription1-->

<!--fullDescription-->
[note]

This method does not replace the **formData** object. To replace it, use the [option(optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#optionoptionName_optionValue) method as shown below:
    
    <!--JavaScript-->
    formInstance.option("formData", newFormData);

[/note]

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->
