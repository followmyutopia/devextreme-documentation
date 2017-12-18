===================================================================
===================================================================

<!--shortDescription-->
Updates the values of several item options.
<!--/shortDescription-->

<!--paramName1-->field<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
A simple item's [name](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#name) or a path to it.       
The path may include the group's caption or the tab's title.
<!--/paramDescription1-->

<!--paramName2-->options<!--/paramName2-->
<!--paramType2-->Object<!--/paramType2-->
<!--paramDescription2-->
Options and their new values.
<!--/paramDescription2-->

<!--fullDescription-->
Use this method to update several options of a form item.

If the required item is contained in a group or tabbed item, add the group or tab title followed by a dot before the required item name and pass this value to the **field** argument.

    <!--JavaScript-->
    $("#myForm").dxForm("instance").itemOption("MyGroup.MyItem", { ... });

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->