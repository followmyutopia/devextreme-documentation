If the user should be able to collapse or expand a group in the **List**, set the [collapsibleGroups](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#collapsibleGroups) option to **true**. In this case, the user can collapse or expand a group with a click on the group header.

    <!--JavaScript-->var fruitsVegetables = [{
        key: "Fruits",
        items: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 }
        ]
    }, {
        // ...
    }];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruitsVegetables,
            grouped: true,
            collapsibleGroups: true,
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<p>").text(data.name + " | " + data.count).css("margin", 0)
                )
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/GroupedList/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

To collapse or expand a specific group programmatically, call the [collapseGroup(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#collapseGroupgroupIndex) or [expandGroup(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#expandGroupgroupIndex) method.

    <!--JavaScript-->var list = $("#listContainer").dxList("instance");
    list.collapseGroup(0); // collapses the group with index 0
    list.expandGroup(4); // expands the group with index 4

#####See Also#####
- [Widget Basics - Call Methods](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/)
- [List - Grouping in the Data Source](/Documentation/Guide/Widgets/List/Grouping/In_the_Data_Source/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

[tags]list, expand, collapse, collapsibleGroups, collapseGroup, expandGroup