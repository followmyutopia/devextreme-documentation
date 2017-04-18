The **Lookup** is a widget that allows an end user to search for an item in a collection shown in a drop-down menu.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-lookup-basics" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds the **Lookup** widget to your page. The simplest configuration requires only a [dataSource](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#dataSource) to be specified. In addition, you can define the [placeholder](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#placeholder) to be displayed when the **Lookup** input field is empty.

    <!--HTML-->
    <div id="lookupContainer"></div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
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

- [valueExpr](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#valueExpr)     
    The data field whose value will be written into the [value](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#value) option.
- [displayExpr](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#displayExpr)     
    The data field whose value will be displayed within the inner [List](/Documentation/Guide/Widgets/List/Overview) widget and in the input field of the **Lookup**.

<!---->

    <!--JavaScript-->
    var lookupData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // . . .
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'id',
            displayExpr: 'country'
        });
    });


#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Lookup - Configure Search Parameters](/Documentation/Guide/Widgets/Lookup/Configure_Search_Parameters/)
- [Lookup - Enable Grouping](/Documentation/Guide/Widgets/Lookup/Enable_Grouping/)
- [Lookup - Enable Paging](/Documentation/Guide/Widgets/Lookup/Enable_Paging/)
- [Lookup - Customize the Appearance](/Documentation/Guide/Widgets/Lookup/Customize_the_Appearance/)
- [Lookup - Handle the Value Change Event](/Documentation/Guide/Widgets/Lookup/Handle_the_Value_Change_Event/)
- [Lookup API Reference](/Documentation/ApiReference/UI_Widgets/dxLookup/)

[tags]lookup, overview, data source, value, display expression, displayExpr, valueExpr