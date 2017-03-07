<article data-show="Content/Applications/16_1/UIWidgets/dxNavBar/markup.html,
        Content/Applications/16_1/UIWidgets/dxNavBar/script.js,
        Content/Applications/16_1/UIWidgets/dxNavBar/styles.css">

The [NavBar](/Documentation/ApiReference/UI_Widgets/dxNavBar/) widget contains items used to navigate through application views.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationnavbarnavbarnavbar/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source)  
- [Handle item events](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events)  
- [Customize item appearance](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Specify an item caption and icon**

In most cases, a NavBar item includes an icon and a caption specified by the relevant properties of the corresponding data source item object.
The item caption is specified by the [text](/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/#text) property. The item icon can be specified by the [icon](/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/#icon) property.

If the [icon library](/Documentation/Guide/Themes/Icon_Library/) contains the required icon, assign the icon name to the **icon** property.

    <!--JavaScript-->
    var navItems = [
        { text: "Home", icon: "home" },
        { text: "About", icon: "info" }
    ]

The **icon** property also accepts a path to a custom image file.

    <!--JavaScript-->
    var navItems = [
        { text: "Home", icon: "images/icons/home.png" },
        { text: "About", icon: "images/icons/info.png" }
    ];

**Display an item badge**

You can also display a badge for a NavBar item. If the item object includes the [badge](/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/#badge) property, the widget displays the text assigned to this property as a badge.

    <!--JavaScript-->
    var navItems = [
        { text: "Home", icon: "home" },
        { text: "About", icon: "info" },
        { text: "favorites", icon: "favorites", badge: "new" }
    ];

**Keyboard support**

An end-user can use the Left/Right arrow key to move focus to the previous/next item.
</article>