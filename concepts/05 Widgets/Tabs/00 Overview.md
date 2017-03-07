The **Tabs** is a tab strip used to switch between pages or views. This widget is included in the [TabPanel](/Documentation/Guide/Widgets/TabPanel/Overview/) widget, but you can use the **Tabs** separately as well.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tabs-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds the **Tabs** widget to your page. One of the tabs has an icon, another has a [badge](/Documentation/ApiReference/UI_Widgets/dxTabs/Default_Item_Template/#badge).

    <!--HTML-->
    <div id="tabsContainer"></div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: [
                { text: "User", icon: 'user' },
                { text: "Comment", badge: "New" },
                { text: "Find" }
            ]
        });
    });

Note that all data source items in the code above follow the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxTabs/Default_Item_Template/) pattern. This provides a default appearance for tabs, which can be customized later.

#####See Also#####
- [Widget Basics - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/)
- [Widget Basics - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/)
- [Widget Basics - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Tabs - Customize Item Appearance](/Documentation/Guide/Widgets/Tabs/Customize_Item_Appearance)
- [Tabs - Control the Behavior](/Documentation/Guide/Widgets/Tabs/Control_the_Behavior)
- [Tabs - Keyboard Support](/Documentation/Guide/Widgets/Tabs/Keyboard_Support)
- [Tabs API Reference](/Documentation/ApiReference/UI_Widgets/dxTabs/)

[tags]tabs, collection container, collection widget, navigation, overview