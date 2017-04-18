The **TabPanel** is a widget consisting of the [Tabs](/Documentation/Guide/Widgets/Tabs/Overview/) and [MultiView](/Documentation/Guide/Widgets/MultiView/Overview/) widgets. It automatically synchronizes the selected tab with the currently displayed view and vice versa.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tab_panel-overview" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=SyGIlFZY_S0&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=38" class="button orange small fix-width-155" target="_blank">Watch Video</a>

The following code adds a simple **TabPanel** to your page.

    <!--HTML-->
    <div id="tabPanelContainer"></div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: [{
                title: 'Info',
                text: 'This is Info Tab'
            }, {
                title: 'Contacts',
                text: 'This is Contacts Tab'
            }, {
                title: 'Address',
                text: 'This is Address Tab'
            }]
        });
    });

Note that all data source items in the code above follow the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Default_Item_Template/) pattern. This provides a default appearance for tabs and views; that is, **title** goes to the tab, and **text** goes to the view. But more often, the data source object structure does not follow this pattern. For correct rendering in these cases, specify a [custom template](/Documentation/Guide/Widgets/TabPanel/Customize_Item_Appearance). 

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [TabPanel - Customize Item Appearance](/Documentation/Guide/Widgets/TabPanel/Customize_Item_Appearance)
- [TabPanel - Control the Behavior](/Documentation/Guide/Widgets/TabPanel/Control_the_Behavior)
- [TabPanel API Reference](/Documentation/ApiReference/UI_Widgets/dxTabPanel/)

[tags]tab panel, tabPanel, collection container, collection widget, navigation, overview