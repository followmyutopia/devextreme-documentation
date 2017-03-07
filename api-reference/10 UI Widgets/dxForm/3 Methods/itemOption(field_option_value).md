<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Updates the value of a form item option.
<!--/shortDescription-->

<!--paramName1-->field<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
Specifies the path to the required <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxForm/Configuration#formData">formData</a> field, or the name of the required editor.
<!--/paramDescription1-->

<!--paramName2-->option<!--/paramName2-->
<!--paramType2-->string<!--/paramType2-->
<!--paramDescription2-->
The name of the option to be updated.
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
<!--/fullDescription-->