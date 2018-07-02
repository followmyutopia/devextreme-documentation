For a minor customization of **NavBar** items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/) are present or absent from the item's data object. For example, the following code generates three items. Each of them has an [icon](/Documentation/Guide/Themes/Icon_Library/). In addition, the second item is disabled, and the third item has a badge.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#navBarContainer").dxNavBar({
            items: [
                { text: "User", icon: "user" },
                { text: "Find", icon: "find", disabled: true },
                { text: "Favorites", icon: "favorites", badge: "New" }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-nav-bar>
        <dxi-item text="User" icon="user"></dxi-item>
        <dxi-item text="Find" icon="find" [disabled]="true"></dxi-item>
        <dxi-item text="Favorites" icon="favorites" badge="New"></dxi-item>
    </dx-nav-bar>

    <!--TypeScript-->
    import { DxNavBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

---

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For Angular, AngularJS, and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code gives a simple example of how you can use **dxTemplate** to customize items in the **NavBar**.

---
##### Angular

    <!--HTML-->
    <dx-nav-bar
        itemTemplate="customTemplate">
        <div *dxTemplate="let item of 'customTemplate'">
            <div class="dx-icon-{{item.icon}}"></div>
            <p class="navbar-template-text">{{item.text}}</p>
        </div>
        <dxi-item text="User" icon="user"></dxi-item>
        <dxi-item text="Find" icon="find"></dxi-item>
        <dxi-item text="Favorites" icon="favorites"></dxi-item>
        <dxi-item text="About" icon="info"></dxi-item>
        <dxi-item text="Home" icon="home"></dxi-item>
        <dxi-item text="URI" icon="tips"></dxi-item>
    </dx-nav-bar>

    <!--TypeScript-->
    import { DxNavBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

    <!--CSS-->
    .navbar-template-text {
        font-size: 12px;
        margin-top: 10px;
    }

##### AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-nav-bar="{
            items: navItems,
            itemTemplate: 'customTemplate'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'customTemplate' }">
                <div class="dx-icon-{{ itemObj.icon }}"></div>
                <p style="font-size:12px; margin-top:10px">{{ itemObj.text }}</p>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.navItems = [
                { text: "User", icon: "user" },
                { text: "Find", icon: "find" },
                { text: "Favorites", icon: "favorites" },
                { text: "About", icon: "info" },
                { text: "Home", icon: "home" },
                { text: "URI", icon: "tips" }
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

##### Knockout

    <!--HTML-->
    <div data-bind="dxNavBar:{
        items: navItems,
        itemTemplate: 'customTemplate'
    }">
        <div data-options="dxTemplate: { name: 'customTemplate' }">
            <div data-bind="css: 'dx-icon-' + icon"></div>
            <p style="font-size:12px; margin-top:10px" data-bind="text: text"></p>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        navItems: [
            { text: "User", icon: "user" },
            { text: "Find", icon: "find" },
            { text: "Favorites", icon: "favorites" },
            { text: "About", icon: "info" },
            { text: "Home", icon: "home" },
            { text: "URI", icon: "tips" }
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine the HTML markup for items manually with jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply this markup, use the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#itemTemplate) callback function as shown in the following code.

    <!--JavaScript-->
    $(function() {
        $("#navBarContainer").dxNavBar({
            items: [
                { text: "User", icon: "user" },
                { text: "Find", icon: "find" },
                // ...
            ],
            itemTemplate: function (itemData, itemIndex, itemElement) {
                var icon = $("<div />").addClass('dx-icon-' + itemData.icon);
                var label = $("<p />").attr("style", "font-size:12px; margin-top:10px")
                                      .text(itemData.text)
                itemElement.append(icon, label);
            }
        });
    });

You can also customize an individual navigation item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/#template) field. 

    <!--HTML--><script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var navItems = [
        { text: "User" },
        { text: "Find" },
        { text: "About", template: $("#individualTemplate") },
        // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines) article.

#####See Also#####
- [NavBar - Default Item Template](/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/) 
- [NavBar - Items Selection](/Documentation/Guide/Widgets/NavBar/Items_Selection/)
- [NavBar Demos](/Demos/WidgetsGallery/#demo/navigation-navbar-overview/ios7)
- [NavBar API Reference](/Documentation/ApiReference/UI_Widgets/dxNavBar/)

[tags]nav bar, navBar, navigation bar, item appearance, customize, templates, template, custom template, default item, default template