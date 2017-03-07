<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--acceptValues-->'dxButton' | 'dxTabs' | 'dxCheckBox' | 'dxSelectBox' | 'dxTextBox' | 'dxAutocomplete' | 'dxDateBox' | 'dxMenu' | 'dxDropDownMenu'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
A widget that presents a toolbar item.
<!--/shortDescription-->

<!--fullDescription-->
This data source field is used by a default item template. If you use the default template for your widget items, you can specify the **widget** field in the data source to specify the widget by which a toolbar item must be displayed. Set the configuration options that are exposed by the configuration object of the specified widget. For this purpose, specify the [options](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#options) field in the data source.

[note]If you use the **Menu** widget as a toolbar item, the [adaptivityEnabled](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#adaptivityEnabled) option does not apply.

When using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), configure this option with a lambda expression in the following manner.

    @(Html.DevExtreme().Toolbar()
        .Items(items => {
            items.Add().Widget(w => w
                .Button() // or another widget
                .Text("Back")
            );
        })
    )

#####See Also#####
- [Toolbar - Specify Item Type](/Documentation/Guide/Widgets/Toolbar/Specify_Item_Type/)

<!--/fullDescription-->