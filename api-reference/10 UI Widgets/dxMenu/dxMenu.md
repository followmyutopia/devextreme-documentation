<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Menu widget<!--/d-->
<!--widgettree-->
dataSource: [
    { text: "Video Players" },
    { text: "Televisions" },
    {
        text: "Monitors",
        items: [
            { text: "DesktopLCD 19" },
            { text: "DesktopLCD 21" },
            { text: "DesktopLED 21" }
        ]
    }
]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_menu">ui/menu</a><!--/module-->
<!--inherits-->..\dxMenuBase\dxMenuBase.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Menu** widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxMenu` jQuery plug-in.

        <!--HTML-->
        <div id="menu"></div>

    <!---->

        <!--JavaScript-->
        var menuItems = [
            { text: "Hide" },
            { text: "Delete" },
            {
                text: "Clipboard",
                items: [
                    { text: "Copy text" },
                    { text: "Clear text" },
                    { text: "Paste text" }
                ]
            }
        ];
        $("#menu").dxMenu({
            items: menuItems
        });

- **Knockout**  
 Add a div element and apply the `dxMenu` binding to this element.

        <!--HTML-->
        <div data-bind="dxMenu: {
            items: menuItems
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-menu` directive to this element.

        <!--HTML-->
        <div dx-menu="{
            items: menuItems
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find detailed information on the principles of working with the widget in the [dxMenu section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Menu_Widgets/#List_of_Menu_Widgets/dxMenu) of the [Menu Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Menu_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationmenumenumenu/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="https://www.youtube.com/watch?v=XR3HePJDa70" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>
<!--/fullDescription-->