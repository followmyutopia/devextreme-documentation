The **ContextMenu** widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actions_and_lists-context_menu-overview"
}

The following code adds the **ContextMenu** widget to your page and binds it to an image using the [target](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#target) option. Note that the data source of the widget declares several nesting levels. Items in the resulting context menu mirror this structure.

---
#####jQuery

    <!--HTML--><img id="someImage" src="http://here/goes/my.jpg">
    <div id="contextMenuContainer"></div>

    <!--JavaScript-->var contextMenuItems = [
        { text: "Zoom In" },
        { text: "Zoom Out" },
        {
            text: "Share",
            items: [{
                text: "Send to a friend",
                items: [
                    { text: "Log in with Facebook" },
                    { text: "Log in with Twitter" }
                ]
            }, {
                text: "Send to a group",
                items: [
                    { text: "Log in with Facebook" },
                    { text: "Log in with Twitter" }
                ]
            }]
        },
        { text: "Comment" }
    ];

    $(function () {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someImage"
        });
    });

#####Angular

    <!--HTML-->
    <img id="someImage" src="http://here/goes/my.jpg">
    <dx-context-menu
        [items]="contextMenuItems"
        target="#someImage">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        contextMenuItems = [
            { text: "Zoom In" },
            { text: "Zoom Out" },
            {
                text: "Share",
                items: [{
                    text: "Send to a friend",
                    items: [
                        { text: "Log in with Facebook" },
                        { text: "Log in with Twitter" }
                    ]
                }, {
                    text: "Send to a group",
                    items: [
                        { text: "Log in with Facebook" },
                        { text: "Log in with Twitter" }
                    ]
                }]
            },
            { text: "Comment" }
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxContextMenuModule
         ],
         // ...
     })

---

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [ContextMenu - Access the Clicked Item](/Documentation/Guide/Widgets/ContextMenu/Access_the_Clicked_Item/)
- [ContextMenu - Customize Item Appearance](/Documentation/Guide/Widgets/ContextMenu/Customize_Item_Appearance)
- [ContextMenu - Open and Close](/Documentation/Guide/Widgets/ContextMenu/Open_and_Close_the_Context_Menu/)
- [ContextMenu API Reference](/Documentation/ApiReference/UI_Widgets/dxContextMenu/)

[tags]context menu, contextMenu, navigation, collection container, collection widget, overview