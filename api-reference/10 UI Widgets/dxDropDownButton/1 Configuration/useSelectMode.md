===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the widget stores the selected drop-down menu item.
<!--/shortDescription-->

<!--fullDescription-->
When you set this option to **true**, the following applies:

- The [selectedItemKey](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#selectedItemKey) and [selectedItem](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#selectedItem) options can be used.

- The [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#onSelectionChanged) function can be executed.

- The button's text and icon are taken from the [selected item](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#selectedItemKey). If you use the [dropDownContentTemplate](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#dropDownContentTemplate), you should update the **selectedItemKey** and the button's appearance.
<!--/fullDescription-->