===================================================================
===================================================================

<!--shortDescription-->
Updates the value of a single item option.
<!--/shortDescription-->

<!--paramName1-->field<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
A simple item's [name](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#name) or a path to it.             
The path may include the group's caption or the tab's title.
<!--/paramDescription1-->

<!--paramName2-->option<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
The option's name.
<!--/paramDescription2-->

<!--paramName3-->value<!--/paramName3-->
<!--paramType3-->any<!--/paramType3-->
<!--paramDescription3-->
The new option value.
<!--/paramDescription3-->

<!--fullDescription-->
If the required item is contained in a group or tabbed item, add the group or tab title followed by a dot before the required item name and pass this value to the **field** argument.

    <!--JavaScript-->
    $("#myForm").dxForm("instance").itemOption("MyGroup.MyItem", "visible", false);

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->