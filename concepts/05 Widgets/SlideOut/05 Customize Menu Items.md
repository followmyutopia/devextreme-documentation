For a minor customization of menu items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Default_Item_Template/) are present or absent from the item's data object. For example, in the following code, *"Favorites"* is disabled and *"Help"* is hidden.

    <!--JavaScript-->var menuItems = [
        { text: "Home" },
        { text: "Messages" },
        { text: "Downloads" },
        { text: "Favorites", disabled: true },
        { text: "Preferences" },
        { text: "Help", visible: false }
    ];

    $(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: menuItems,
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

    <!--CSS-->#slideOutContainer {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code gives a simple example of how you can use **dxTemplate** to customize the items of a slide-out menu.

---

#####**AngularJS**

    <!--HTML--><div ng-controller="DemoController">
        <div dx-slide-out="{
            dataSource: menuData,
            menuItemTemplate: 'items',
            onItemClick: hideMenu
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'items' }">
                <span class="dx-icon-{{ item.icon }}"></span> 
                <span style="margin-left:10px">{{ item.text }}</span>
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.menuData = [
                { text: "Home", icon: "home" },
                { text: "Messages", icon: "message" },
                { text: "Music", icon: "music" },
                { text: "Photos", icon: "photo" },
                { text: "Downloads", icon: "download" },
                { text: "Favorites", icon: "favorites" },
                { text: "Preferences", icon: "preferences" },
                { text: "Help", icon: "help" }
            ];
            $scope.hideMenu = function (e) {
                e.component.hideMenu();
            };
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML--><div data-bind="dxSlideOut: {
        dataSource: menuData,
        menuItemTemplate: 'items',
        onItemClick: function (e) {
            e.component.hideMenu();
        }
    }">
        <div data-options="dxTemplate: { name: 'items' }">
            <span data-bind="css: 'dx-icon-' + icon"></span>
            <span style="margin-left:10px" data-bind="text: text"></span>
        </div>
    </div>

    <!--JavaScript-->var viewModel = {
        menuData: [
            { text: "Home", icon: "home" },
            { text: "Messages", icon: "message" },
            { text: "Music", icon: "music" },
            { text: "Photos", icon: "photo" },
            { text: "Downloads", icon: "download" },
            { text: "Favorites", icon: "favorites" },
            { text: "Preferences", icon: "preferences" },
            { text: "Help", icon: "help" }
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine the HTML markup for menu items manually with jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply this markup, use the [menuItemTemplate](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#menuItemTemplate) callback function as shown in the following code.

    <!--JavaScript-->var menuItems = [
        { text: "Home", icon: "home" },
        { text: "Messages", icon: "message" },
        { text: "Music", icon: "music" },
        { text: "Photos", icon: "photo" },
        { text: "Downloads", icon: "download" },
        { text: "Favorites", icon: "favorites" },
        { text: "Preferences", icon: "preferences" },
        { text: "Help", icon: "help" }
    ];

    $(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: menuItems,
            menuItemTemplate: function (itemData, itemIndex, itemElement) {
                var iconElement = $('<span />').addClass("dx-icon-" + itemData.icon);
                var textElement = $('<span />').text(itemData.text)
                                        .attr('style', 'margin-left:10px');
                itemElement.append(iconElement, textElement);
            },
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

You can also customize an individual menu item. For this purpose, declare a template for this item as a script and pass its `id` to the [menuTemplate](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Default_Item_Template/#menuTemplate) field of the item's data object.

    <!--HTML--><script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var menuItems = [
        { text: "Home" },
        { text: "Messages" },
        {
            text: "Downloads",
            menuTemplate: $("#individualTemplate")
        }
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [Use an Alternative Template Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine) article.
 
#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [SlideOut - Group Menu Items](/Documentation/Guide/Widgets/SlideOut/Group_Menu_Items)
- [SlideOut Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-slideout-overview/ios7)
- [SlideOut API Reference](/Documentation/ApiReference/UI_Widgets/dxSlideOut/)

[tags]slide-out menu, slideOut, item appearance, customize, templates