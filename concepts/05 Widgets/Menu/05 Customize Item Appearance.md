For a minor customization of **Menu** items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/Documentation/ApiReference/UI_Widgets/dxMenu/Default_Item_Template/) are present or absent from the item's data object. For example, the following code generates two root items with two drop-down menu items each. The root items are supplied with [icons](/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library).

---
##### jQuery

    <!--JavaScript-->var menuItems = [{
        text: "Upload", icon: "upload",
        items: [
            { text: "From your computer" },
            { text: "From a cloud service" }
        ]
    }, {
        text: "Share", icon: "message",
        items: [
            { text: "Log in with Facebook" },
            { text: "Log in with Twitter" }
        ]
    }];

    $(function () {
        $("#menuContainer").dxMenu({
            items: menuItems
        });
    });

##### Angular

    <!--HTML-->
    <dx-menu
        [items]="menuItems">
    </dx-menu>

    <!--TypeScript-->
    import { DxMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        menuItems = [{
            text: "Upload", icon: "upload",
            items: [
                { text: "From your computer" },
                { text: "From a cloud service" }
            ]
        }, {
            text: "Share", icon: "message",
            items: [
                { text: "Log in with Facebook" },
                { text: "Log in with Twitter" }
            ]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxMenuModule
        ],
        // ...
    })

---

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For Angular, AngularJS, and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code gives a simple example of how you can use **dxTemplate** to customize menu items.

---
##### Angular

    <!--HTML-->
    <dx-menu
        [items]="menuItems"
        itemTemplate="items">
        <div *dxTemplate="let item of 'items'">
            <i>{{item.text}}</i>
        </div>
    </dx-menu>

    <!--TypeScript-->
    import { DxMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        menuItems = [{
            text: "Upload",
            items: [
                { text: "From your computer" },
                { text: "From a cloud service" }
            ]
        }, {
            text: "Share",
            items: [
                { text: "Log in with Facebook" },
                { text: "Log in with Twitter" }
            ]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxMenuModule
        ],
        // ...
    })

#####**AngularJS**

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.menuItems = [{
                text: "Upload",
                items: [
                    { text: "From your computer" },
                    { text: "From a cloud service" }
                ]
            }, {
                text: "Share",
                items: [
                    { text: "Log in with Facebook" },
                    { text: "Log in with Twitter" }
                ]
            }];
        });

    <!--HTML--><div ng-controller="DemoController">
        <div dx-menu="{ items: menuItems, itemTemplate: 'items' }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'items' }">
                <i>{{ item.text }}</i>
            </div>
        </div>
    </div>

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--JavaScript-->var viewModel = {
        menuItems: [{
            text: "Upload",
            items: [
                { text: "From your computer" },
                { text: "From a cloud service" }
            ]
        }, {
            text: "Share",
            items: [
                { text: "Log in with Facebook" },
                { text: "Log in with Twitter" }
            ]
        }]
    };

    ko.applyBindings(viewModel);

    <!--HTML--><div data-bind="dxMenu: { items: menuItems, itemTemplate: 'items' }">
        <div data-options="dxTemplate: { name: 'items' }">
            <i data-bind="text: text"></i>
        </div>
    </div>

---

If you use jQuery alone, combine the HTML markup for menu items manually with jQuery <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a>. To apply this markup, use the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#itemTemplate) callback function as shown in the following code.

    <!--JavaScript-->var menuItems = [{
        text: "Upload",
        items: [
            { text: "From your computer" },
            { text: "From a cloud service" }
        ]
    }, {
        text: "Share",
        items: [
            { text: "Log in with Facebook" },
            { text: "Log in with Twitter" }
        ]
    }];

    $(function () {
        $("#menuContainer").dxMenu({
            items: menuItems,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<i>" + itemData.text + "</i>");
            }
        });
    });

You can also customize an individual menu item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/Documentation/ApiReference/UI_Widgets/dxMenu/Default_Item_Template/#template) field of the item's data object.

    <!--HTML--><script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var menuItems = [{
        text: "Upload", icon: "upload",
        template: $("#individualTemplate"),
        items: [
            { text: "From your computer" },
            { text: "From a cloud service" }
        ]
    },
        // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines) article.

#####See Also#####
- [Menu Demos](/Demos/WidgetsGallery/#demo/navigation-menu-overview)
- [Menu API Reference](/Documentation/ApiReference/UI_Widgets/dxMenu/)

[tags]menu, item appearance, customize, templates