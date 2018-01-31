===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Array<dxFormSimpleItem, dxFormGroupItem, dxFormTabbedItem, dxFormEmptyItem><!--/type-->
===========================================================================

<!--shortDescription-->
Holds an array of form items.
<!--/shortDescription-->

<!--fullDescription-->
The array passed to this option can hold items of the following types.

- [Simple](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/)  
 A standard item consisting of a label and an editor widget used to specify a value of the associated data field. See [demo](/Demos/WidgetsGallery/Demo/Form/CustomizeItem/jQuery/Light/).

- [Group](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/)  
 An item representing a container of another form items. See [demo](/Demos/WidgetsGallery/Demo/Form/GroupedFields/jQuery/Light/).

- [Tabbed](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/)  
 An item representing a tabbed container of another form items. See [demo](/Demos/WidgetsGallery/Demo/Form/GroupedFields/jQuery/Light/).

- [Empty](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/)  
 An empty item used to add a space between neighboring items.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), declare the items in the following manner.

    <!--Razor C#-->@(Html.DevExtreme().Form()
        .FormData(Model.Data)
        .Items(rootItems => {
            rootItems.AddSimple().DataField("EmployeeID"); // Adds a simple item
            rootItems.AddEmpty(); // Adds an empty item
            rootItems.AddGroup().Caption("General Info") // Adds a group item
                .Items(groupItems => {
                    groupItems.AddSimple().DataField("FirstName");
                    // ...
                });
            rootItems.AddTabbed() // Adds a tabbed item
                .Tabs(tabs => {
                    tabs.Add().Title("Address")
                        .Items(addressItems => {
                            addressItems.AddSimple().DataField("Country");
                            // ...
                        });
                    tabs.Add().Title("Phone")
                        // ...
                });
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Form() _
        .FormData(Model.Data) _
        .Items(Sub(rootItems)
            rootItems.AddSimple().DataField("EmployeeID") ' Adds a simple item
            rootItems.AddEmpty() ' Adds an empty item
            ' Adds a group item
            rootItems.AddGroup().Caption("General Info") _
                .Items(Sub(groupItems)
                    groupItems.AddSimple().DataField("FirstName")
                    ' ...
                End Sub)
            ' Adds a tabbed item
            rootItems.AddTabbed() _
                .Tabs(Sub(tabs)
                    tabs.Add().Title("Address") _
                        .Items(Sub(addressItems)
                            addressItems.AddSimple().DataField("Country")
                            ' ...
                        End Sub)
                    tabs.Add().Title("Phone")
                        ' ...
                End Sub)
        End Sub)
    )
<!--/fullDescription-->