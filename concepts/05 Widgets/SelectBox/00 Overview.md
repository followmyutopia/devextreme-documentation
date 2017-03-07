The **SelectBox** widget is an editor that allows an end user to select an item from a drop-down list.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-select_box-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds the **SelectBox** to your page. The simplest configuration of the widget requires only a [dataSource](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#dataSource) to be specified. In addition, you can specify the [placeholder](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#placeholder) to be displayed when the **SelectBox** is empty.

    <!--HTML-->
    <div id="selectBoxContainer"></div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            placeholder: "Select a product..."
        });
    });

If your data is an array of objects, specify: 

- [valueExpr](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#valueExpr)     
    The data field whose value will be written into the [value](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#value) option.
- [displayExpr](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#displayExpr)     
    The data field whose value will be displayed in the drop-down list and in the input field of the widget.

<!---->

    <!--JavaScript-->
    var selectBoxData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // . . .
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country'
        });
    });

#####See Also#####
- [Widget Basics - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/)
- [Widget Basics - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/)
- [Widget Basics - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [SelectBox - Customize Item Appearance](/Documentation/Guide/Widgets/SelectBox/Customize_Item_Appearance/)
- [SelectBox - Enable Searching](/Documentation/Guide/Widgets/SelectBox/Enable_Searching/)
- [SelectBox - Create a User-Defined Item](/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/)
- [SelectBox - Handle the Value Change Event](/Documentation/Guide/Widgets/SelectBox/Handle_the_Value_Change_Event/)
- [SelectBox - Keyboard Support](/Documentation/Guide/Widgets/SelectBox/Keyboard_Support/)
- [SelectBox API Reference](/Documentation/ApiReference/UI_Widgets/dxSelectBox/)

[tags]selectBox, select box, editor, collection widget, overview, data source, value, display expression