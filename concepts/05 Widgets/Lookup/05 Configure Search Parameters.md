[note]Searching works with source data of plain structure only. Subsequently, data can be transformed to hierarchical structure using the **DataSource**'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option.

The **Lookup** widget allows a user to search through its items. Moreover, the widget offers suggestions while the user types a value into the search box. Usually, the data field that provides suggestions is the same data field that is searched for the typed value. If there are two different fields, assign the field providing suggestions to the **valueExpr** option and the field to be searched to the **searchExpr** option. Assign an array of field names to the **searchExpr** option if you need to search several fields.

    <!--JavaScript-->
    var lookupData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'country',
            displayExpr: 'country',
            searchExpr: 'capital',
            placeholder: 'Select country'
        });
    });

The **Lookup** widget can provide suggestions in two different modes: *'contains'* (by default) and *'startswith'*. You can use the [searchMode](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchMode) option to change the mode. You can also use the [searchPlaceholder](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchPlaceholder) option to specify a placeholder for an empty search box.

    <!--JavaScript-->
    var lookupData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // . . .
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'country',
            searchMode: 'startswith',
            searchPlaceholder: 'Type country name'
        });
    });

The **Lookup** widget starts providing suggestions once an end user types the first character by default. Use the [minSearchLength](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#minSearchLength) option to increase the number of characters that triggers suggestions. 

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            // . . .
            minSearchLength: 3
        });
    });

There is a delay between the moment a user finishes typing and the moment the **Lookup** starts providing suggestions. To increase or descrease it, use the [searchTimeout](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchTimeout) option. The delay is measured in milliseconds.

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            // . . .
            searchTimeout: 500
        });
    });

The **Lookup** widget also clears previous search results before the drop-down menu is displayed by default. Assign **false** to the [cleanSearchOnOpening](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#cleanSearchOnOpening) option to keep them.

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            // . . .
            cleanSearchOnOpening: false
        });
    });

Assign **false** to the [searchEnabled](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchEnabled) option if you need to disable searching.

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            // . . .
            searchEnabled: false
        });
    });

#####See Also#####
- [Lookup - Enable Grouping](/Documentation/Guide/Widgets/Lookup/Enable_Grouping/)
- [Lookup - Enable Paging](/Documentation/Guide/Widgets/Lookup/Enable_Paging/)
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics/)
- [Lookup API Reference](/Documentation/ApiReference/UI_Widgets/dxLookup/)

[tags]lookup, search, search mode, time interval, min search length, disable searching, placeholder, clean search parameters, searchExpr
