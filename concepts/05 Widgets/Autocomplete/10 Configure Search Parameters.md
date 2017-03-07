The **Autocomplete** can provide suggestions in two different modes: *'contains'* (by default) and *'startswith'*. You can use the [searchMode](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#searchMode) option to change the mode.

    <!--JavaScript-->
    var autocompleteData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // . . .
    ];

    $(function() {
        $("#autocompleteContainer").dxAutocomplete({
            dataSource: autocompleteData,
            valueExpr: 'country',
            searchMode: 'startswith'
        });
    });

By default, the **Autocomplete** widget starts providing suggestions once an end user types the first character. To increase the number of characters that triggers suggestions, use the [minSearchLength](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#minSearchLength) option. 

    <!--JavaScript-->$(function() {
        $("#autocompleteContainer").dxAutocomplete({
            // . . .
            minSearchLength: 3
        });
    });

You can also specify the time interval the widget should wait before providing suggestions. Assign this time interval measured in milliseconds to the [searchTimeout](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#searchTimeout) option.

    <!--JavaScript-->$(function() {
        $("#autocompleteContainer").dxAutocomplete({
            // . . .
            searchTimeout: 500
        });
    });

#####See Also#####
- [Autocomplete - Customize Item Appearance](/Documentation/Guide/Widgets/Autocomplete/Customize_Item_Appearance/)
- [Autocomplete Demo](http://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-autocomplete-overview)
- [Autocomplete API Reference](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/)

[tags]autocomplete, search, search mode, time interval, min search length