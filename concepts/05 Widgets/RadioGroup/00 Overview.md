The **RadioGroup** is a widget that contains a set of radio buttons and allows an end user to make a single selection from the set.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-radio_group-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a simple **RadioGroup** to your page. Here, the [value](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#value) option specifies the initially selected radio button.

    <!--HTML-->
    <div id="radioGroupContainer"></div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: ["Low", "Normal", "Urgent", "High"],
            value: "Low"
        });
    });

If your data is an array of objects, bind it to the **RadioGroup** using the [displayExpr](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#displayExpr) and [valueExpr](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#valueExpr) options. **displayExpr** specifies which data source field provides texts for buttons; **valueExpr** specifies which data source field provides values to be written to the [value](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#value) option when a button is selected. Leave **valueExpr** unspecified if you need the entire data object to be written to the **value** option.

    <!--JavaScript-->
    var dataItems = [
        { text: "Low", color: "grey" },
        { text: "Normal", color: "green" },
        { text: "Urgent", color: "yellow" },
        { text: "High", color: "red" }
    ];

    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: dataItems,
            displayExpr: "text",
            // valueExpr: "color",
            value: dataItems[1]
        });
    });

The **RadioGroup** widget supports horizontal (default for tablets) and vertical (default for other devices) layouts. To change the layout for all types of devices, specify the [layout](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#layout) option.

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: ["Low", "Normal", "Urgent", "High"],
            layout: "horizontal" // or "vertical"
        });
    });

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [RadioGroup - Handle the Value Change Event](/Documentation/Guide/Widgets/RadioGroup/Handle_the_Value_Change_Event)
- [RadioGroup - Customize Item Appearance](/Documentation/Guide/Widgets/RadioGroup/Customize_Item_Appearance)
- [RadioGroup - Keyboard Support](/Documentation/Guide/Widgets/RadioGroup/Keyboard_Support)
- [RadioGroup API Reference](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/)

[tags]radio group, radioGroup, layout, editor, overview