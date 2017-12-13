===================================================================
===================================================================

<!--shortDescription-->
Gets the value of the form item option.
<!--/shortDescription-->

<!--paramName1-->field<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
Specifies the path to the required [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) field, or the name of the required item.
<!--/paramDescription1-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
The value of an item option.
<!--/returnDescription-->

<!--fullDescription-->
If the required item is contained in a group or tabbed item, add the group or tab title followed by a dot before the required item name and pass this value to the **field** argument.

    <!--JavaScript-->
    $("#myForm").dxForm("instance").itemOption("MyGroup.MyItem");

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->