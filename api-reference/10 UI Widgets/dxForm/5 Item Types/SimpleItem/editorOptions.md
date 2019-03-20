===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the form item's editor.
<!--/shortDescription-->

<!--fullDescription-->
This object should contain the options of the DevExtreme editor specified in the [editorType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType).

When using [ASP.NET MVC Controls](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), configure the editor in the following manner.

    <!--Razor C#-->@(Html.DevExtreme().Form()
        .FormData(Model.Data)
        .Items(items => {
            items.AddSimple().DataField("EmployeeID")
                // Instead of TextBox here can be any other supported editor
                .Editor(e => e.TextBox()
                    .Placeholder("Type a text here...")
                    // ...
                    // other editor options go here
                )
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Form() _
        .FormData(Model.Data) _
        .Items(Sub(items)
            items.AddSimple().DataField("EmployeeID") _
                .Editor(Function(e)
                    ' Instead of TextBox here can be any other supported editor
                    Return e.TextBox() _
                        .Placeholder("Type a text here...") _
                        ' ...
                        ' other editor options go here
                End Function)
        End Sub)
    )

#include widgets-config-object-option-note

#####See Also#####
- [Configure Simple Items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
<!--/fullDescription-->