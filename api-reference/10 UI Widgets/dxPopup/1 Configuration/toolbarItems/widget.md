---
id: dxPopup.Options.toolbarItems.widget
acceptValues: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton'
type: String
---
---
##### shortDescription
A widget that presents a toolbar item.

---
[note]Import the specified widget's module when using [DevExtreme modules](/Documentation/Guide/Common/Modularity/). 

When using [ASP.NET MVC Controls](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), configure the widget with a lambda expression in the following manner.

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