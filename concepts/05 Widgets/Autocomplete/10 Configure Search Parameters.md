The **Autocomplete** can provide suggestions in two different modes: *'contains'* (by default) and *'startswith'*. You can use the [searchMode](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#searchMode) option to change the mode.

---
##### jQuery

    <!--JavaScript-->
    var autocompleteData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#autocompleteContainer").dxAutocomplete({
            dataSource: autocompleteData,
            valueExpr: 'country',
            searchMode: 'startswith'
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        valueExpr="country"
        searchMode="startswith">
    </dx-autocomplete>

    <!--TypeScript-->
    export class AppComponent {
        autocompleteData = [
            { country: "Afghanistan", capital: "Kabul" },
            { country: "Albania", capital: "Tirana" },
            // ...
        ]
    }

---

By default, the **Autocomplete** widget starts providing suggestions once an end user types the first character. To increase the number of characters that triggers suggestions, use the [minSearchLength](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#minSearchLength) option. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#autocompleteContainer").dxAutocomplete({
            // ...
            minSearchLength: 3
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete ...
        [minSearchLength]="3">
    </dx-autocomplete>

---

You can also specify the time interval the widget should wait before providing suggestions. Assign this time interval measured in milliseconds to the [searchTimeout](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#searchTimeout) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#autocompleteContainer").dxAutocomplete({
            // ...
            searchTimeout: 500
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete ...
        [searchTimeout]="500">
    </dx-autocomplete>

---

#####See Also#####
- [Autocomplete - Customize Item Appearance](/Documentation/Guide/Widgets/Autocomplete/Customize_Item_Appearance/)
- [Autocomplete Demos](http://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-autocomplete-overview)
- [Autocomplete API Reference](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/)

[tags]autocomplete, search, search mode, time interval, min search length