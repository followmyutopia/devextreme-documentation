<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a configuration object for the [widget](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/buttons/#widget) that presents a toolbar item.
<!--/shortDescription-->

<!--fullDescription-->
When using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), configure the widget with a lambda expression in the following manner.

    <!--Razor C#-->// Instead of Popup here you can use Popover
    @(Html.DevExtreme().Popup()
        .ToolbarItems(items => {
            items.Add().Widget(w => w
                // Instead of Button here can be any other widget
                .Button()
                .Text("Back")
            );
        })
    )

    <!--Razor VB-->' Instead of Popup here you can use Popover
    @(Html.DevExtreme().Popup() _
        .ToolbarItems(Sub(items)
            items.Add().Widget(Function(w)
                ' Instead of Button here can be any other widget
                Return w.Button().Text("Back")
            End Function)
        End Sub)
    )
<!--/fullDescription-->