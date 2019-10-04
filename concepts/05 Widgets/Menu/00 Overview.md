The **Menu** widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigation-menu-overview"
}

The following code adds the **Menu** widget to your page. Note that the data source of the widget declares several nesting levels. First-level items produce items for the widget panel, or "root items". Other items go to drop-down menus.

---
##### jQuery

    <!--HTML--><div id="menuContainer"></div>

    <!--JavaScript-->var menuItems = [{
        name: "Video Players",
        items: [
            { name: "HD Video Player", price: 220 },
            { name: "SuperHD Video Player", price: 270 }
        ]
    }, {
        name: "Televisions",
        items: [
            { name: "SuperLCD 42", price: 1200 },
            { name: "SuperLED 42", price: 1450 },
            { name: "SuperLED 50", price: 1600 }
        ]
    }, {
        name: "Monitors",
        items: [{
            name: "19\"",
            items: [
                { name: "DesktopLCD 19", price: 160 }
            ]
        }, {
            name: "21\"",
            items: [
                { name: "DesktopLCD 21", price: 170 },
                { name: "DesktopLED 21", price: 175 }
            ]
        }]
    }];

    $(function () {
        $("#menuContainer").dxMenu({
            items: menuItems,
            displayExpr: "name"
        });
    });

##### Angular

    <!--HTML-->
    <dx-menu
        [items]="menuItems"
        displayExpr="name">
    </dx-menu>

    <!--TypeScript-->
    import { DxMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        menuItems = [{
            name: "Video Players",
            items: [
                { name: "HD Video Player", price: 220 },
                { name: "SuperHD Video Player", price: 270 }
            ]
        }, {
            name: "Televisions",
            items: [
                { name: "SuperLCD 42", price: 1200 },
                { name: "SuperLED 42", price: 1450 },
                { name: "SuperLED 50", price: 1600 }
            ]
        }, {
            name: "Monitors",
            items: [{
                name: "19\"",
                items: [
                    { name: "DesktopLCD 19", price: 160 }
                ]
            }, {
                name: "21\"",
                items: [
                    { name: "DesktopLCD 21", price: 170 },
                    { name: "DesktopLED 21", price: 175 }
                ]
            }]
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

#####See Also#####
#include common-link-configurewidget
- [Menu - Access the Clicked Item](/Documentation/Guide/Widgets/Menu/Access_the_Clicked_Item/)
- [Menu - Customize Item Appearance](/Documentation/Guide/Widgets/Menu/Customize_Item_Appearance)
- [Menu - Change the Orientation](/Documentation/Guide/Widgets/Menu/Change_the_Orientation)
- [Menu API Reference](/Documentation/ApiReference/UI_Widgets/dxMenu/)

[tags]menu, navigation, collection container, collection widget, overview