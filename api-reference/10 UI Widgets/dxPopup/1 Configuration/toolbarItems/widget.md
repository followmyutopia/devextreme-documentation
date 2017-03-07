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
When using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), configure the widget with a lambda expression in the following manner.

    @(Html.DevExtreme().Popup() // or Popover()
        .ToolbarItems(items => {
            items.Add().Widget(w => w
                .Button() // or another widget
                .Text("Back")
            );
        })
    )
<!--/fullDescription-->