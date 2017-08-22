[note]Searching works with source data of plain structure only. Subsequently, data can be transformed to hierarchical structure using the **DataSource**'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option.

The **SelectBox** widget allows an end user to search through its items. This feature is disabled by default. To enable it, assign **true** to the [searchEnabled](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#searchEnabled) option. Use the [searchExpr](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#searchExpr) option to specify which data fields should be searched. Assign an _array_ of field names to this option if you need to search several fields.

    <!--JavaScript-->
    var selectBoxData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // . . .
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: ['country', 'capital']
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/SearchAndEditing/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

When a user types a string in the input field, the **SelectBox** suggests all items that _contain_ this string. Assign *'startswith'* to the [searchMode](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#searchMode) option if you want the **SelectBox** to suggest only those items that _start_ with the input string.

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: 'country',
            searchMode: 'startswith'
        });
    });

There is a delay between the moment a user finishes typing and the moment the search is executed. To increase or descrease it, use the [searchTimeout](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#searchTimeout) option. The delay is measured in milliseconds.

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: 'country',
            searchTimeout: 1000
        });
    });

The **SelectBox** widget starts searching after a user has typed at least one character by default. Use the **minSearchLength** option to increase the number of characters that triggers the search. 

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: "country",
            minSearchLength: 3
        });
    });

#####See Also#####
- [SelectBox - Create a User-Defined Item](/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/)
- [SelectBox - Handle the Value Change Event](/Documentation/Guide/Widgets/SelectBox/Handle_the_Value_Change_Event/)
- [SelectBox API Reference](/Documentation/ApiReference/UI_Widgets/dxSelectBox/)

[tags]selectBox, select box, editor, search, search mode, search expression, time interval, delay, search timeout, min search length
