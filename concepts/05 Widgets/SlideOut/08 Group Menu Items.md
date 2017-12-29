If you need to group menu items, group them in the data source as shown in the following code. The [key](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Default_Item_Template/#key) property gives names to groups; the [items](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Default_Item_Template/#items) property specifies menu items included in the group.

    <!--JavaScript-->var groupedMenuItems = [{
        key: "Main",
        items: ["Home", "Messages", "Favorites"]
    }, {
        key: "Media",
        items: ["Music", "Photos", "Downloads"]
    }];

To let the widget know that data it works with is grouped, assign **true** to the [menuGrouped](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#menuGrouped) option.

    <!--JavaScript-->$(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: groupedMenuItems,
            menuGrouped: true,
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

In some cases, you may need to define a custom template for group headers, for example, when the field providing group names differs from **key**, or if group headers need some customizations. To do this, use the [menuGroupTemplate](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#menuGroupTemplate) callback function as shown in the following code.

    <!--JavaScript-->var groupedMenuItems = [{
        groupName: "Main",
        items: ["Home", "Messages", "Favorites"]
    }, {
        groupName: "Media",
        items: ["Music", "Photos", "Downloads"]
    }];

    $(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: groupedMenuItems,
            menuGrouped: true,
            menuGroupTemplate: function (groupData, groupIndex, groupElement) {
                groupElement.append("<p>" + groupData.groupName + "</p>");
            },
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

[note]In AngularJS and Knockout apps, you can use DevExtreme's own markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). For more information, see the [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates) topic.

#####See Also#####
- [SlideOut - Customize Menu Items](/Documentation/Guide/Widgets/SlideOut/Customize_Menu_Items)
- [SlideOut Demos](/Demos/WidgetsGallery/#demo/navigation-slideout-overview/ios7)
- [SlideOut API Reference](/Documentation/ApiReference/UI_Widgets/dxSlideOut/)

[tags]slide-out menu, slideOut, group appearance, customize, templates