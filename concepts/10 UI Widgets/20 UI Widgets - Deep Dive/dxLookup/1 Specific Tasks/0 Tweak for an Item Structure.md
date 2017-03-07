<article data-show="Content/Applications/16_1/UIWidgets/dxLookup/TweakForItemStructure/markup.html,
        Content/Applications/16_1/UIWidgets/dxLookup/TweakForItemStructure/script.js,
        Content/Applications/16_1/UIWidgets/dxLookup/TweakForItemStructure/styles.css">

If a lookup item is a string value, this value is displayed in the lookup input element and held in the **value** option. In most cases, a lookup item is an object containing various properties. In this case, you should specify which property value is displayed in the lookup input element and which one should be accessed using the **value** option.

The [displayExpr](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#displayExpr) option specifies the property of an item object whose value is displayed in the lookup input element. You can access the displayed value using the [displayValue](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#displayValue) option.

    <!--JavaScript-->
    var lookupOptions = {
        dataSource: lookupData,
        displayExpr: "text"
    }

If a list item template is not specified, each list item displays a value of the property specified by the **displayExpr** option.

The [valueExpr](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#valueExpr) option specifies the item object property whose value is accessed using the [value](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#value) option. You can pass "this" to the **valueExpr** option to access the entire item object.

    <!--JavaScript-->
    var lookupOptions = {
        dataSource: lookupData,
        displayExpr: "text",
        valueExpr: "population"
    }

#####See Also#####
- [Get and Set Options - jQuery](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Get_and_Set_Options)
- [Change Options - AngularJS](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Change_Options)
- [Change Options - Knockout](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Change_Options)
</article>