<span style="color:red"><b>IMPORTANT:</b></span> The **Pivot** widget is deprecated since v18.1. We recommend using the [TabPanel](/Documentation/Guide/Widgets/TabPanel/Overview/) widget instead.

The **Pivot** provides a quick way to manage multiple views. It includes a collection of views and a navigation header. An end user switches the views by swiping them or by clicking their titles on the navigation header. This widget is very useful for presenting categorized lists.

The following code adds a primitive **Pivot** widget to your page.

    <!--HTML-->
    <div id="pivotContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#pivotContainer").dxPivot({
            items: [{
                title: "Main courses",
                text: "First and second courses of a meal"
            }, {
                title: "Seafood",
                text: "Seafood: ocean and sea"
            }, {
                title: "Desserts",
                text: "Desserts: biscuits and cookies"
            }, {
                title: "Drinks",
                text: "Drinks: soft vine and tea"
            }],
            height: 300
        });
    });

Note that all data source items in the code above follow the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxPivot/Default_Item_Template/) pattern. This provides a default item appearance, which can be customized later.

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Pivot - Customize Item Appearance](/Documentation/Guide/Widgets/Pivot/Customize_Item_Appearance)
- [Pivot - Categorize Data for Views](/Documentation/Guide/Widgets/Pivot/Categorize_Data_for_Views)
- [Pivot API Reference](/Documentation/ApiReference/UI_Widgets/dxPivot/)

[tags]pivot, collection container, collection widget, navigation, overview