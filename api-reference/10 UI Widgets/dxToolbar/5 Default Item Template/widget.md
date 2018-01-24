===========================================================================
<!--acceptValues-->'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
A widget that presents a toolbar item.
<!--/shortDescription-->

<!--fullDescription-->
[note]Import the specified widget's module when using [DevExtreme modules](/Documentation/Guide/Common/Modularity/). 

When using [ASP.NET MVC Controls](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), configure this option with a lambda expression in the following manner.

    <!--Razor C#-->@(Html.DevExtreme().Toolbar()
        .Items(items => {
            items.Add().Widget(w => w
                // Instead of Button here you can use any other widget
                .Button()
                .Text("Back")
            );
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Toolbar() _
        .Items(Sub(items)
            items.Add().Widget(Function(w)
                ' Instead of Button here you can use any other widget
                Return w.Button().Text("Back")
            End Function)
        End Sub)
    )

#####See Also#####
- [Default Item Template - options](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#options)
- [Toolbar - Specify Item Type](/Documentation/Guide/Widgets/Toolbar/Specify_Item_Type/)
<!--/fullDescription-->