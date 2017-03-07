<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->array<!--/type-->
===========================================================================

<!--shortDescription-->
Holds an array of form items.
<!--/shortDescription-->

<!--fullDescription-->
The array passed to this option can hold items of the following types.

- [Simple](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/)  
 A standard item consisting of a label and an editor widget used to specify a value of the associated data field.

- [Group](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/)  
 An item representing a container of another form items.

- [Tabbed](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/)  
 An item representing a tabbed container of another form items.

- [Empty](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/)  
 An empty item used to add a space between neighboring items.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), declare the items in the following manner.

    @(Html.DevExtreme().Form()
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
<!--/fullDescription-->