The **Autocomplete** widget is a textbox that provides suggestions while a user types into it.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editors-autocomplete-overview"
}

The following code adds the **Autocomplete** to your page. The simplest configuration of the widget requires only a [dataSource](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#dataSource) to be specified. In addition, you can specify the [placeholder](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#placeholder) to be displayed when the **Autocomplete** is empty.

---
##### jQuery

    <!--HTML-->
    <div id="autocompleteContainer"></div>

    <!--JavaScript-->
    var autocompleteData = [
        "Afghanistan",
        "Albania",
        // ...
    ];
    $(function() {
        $("#autocompleteContainer").dxAutocomplete({
            dataSource: autocompleteData,
            placeholder: 'Type country name...'
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        placeholder="Type country name...">
    </dx-autocomplete>

    <!--TypeScript-->
    import { DxAutocompleteModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        autocompleteData = [
            "Afghanistan",
            "Albania",
            // ...
        ]
    }
    @NgModule({
        imports: [
            // ...
            DxAutocompleteModule
        ],
        // ...
    })

---

If your data is an array of objects, use the [valueExpr](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#valueExpr) option to specify the field providing suggestions.

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
            placeholder: 'Type country name...',
            valueExpr: 'country'
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        placeholder="Type country name..."
        valueExpr="country">
    </dx-autocomplete>

    <!--TypeScript-->
    import { DxAutocompleteModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        autocompleteData = [
            { country: "Afghanistan", capital: "Kabul" },
            { country: "Albania", capital: "Tirana" },
            // ...
        ]
    }
    @NgModule({
        imports: [
            // ...
            DxAutocompleteModule
        ],
        // ...
    })

---

Usually, the data field that provides suggestions is the same data field that is searched for the typed text. If in your case, it is two different fields: assign the field providing suggestions to the **valueExpr** option and the field to be searched - to the [searchExpr](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#searchExpr) option. Note that **searchExpr** also accepts arrays in case you need several fields to search in.

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
            placeholder: 'Type capital name',
            valueExpr: 'country',
            searchExpr: 'capital'            
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        placeholder="Type country name..."
        valueExpr="country"
        searchExpr="capital">
    </dx-autocomplete>

    <!--TypeScript-->
    import { DxAutocompleteModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        autocompleteData = [
            { country: "Afghanistan", capital: "Kabul" },
            { country: "Albania", capital: "Tirana" },
            // ...
        ]
    }
    @NgModule({
        imports: [
            // ...
            DxAutocompleteModule
        ],
        // ...
    })

---

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Autocomplete - Customize Item Appearance](/Documentation/Guide/Widgets/Autocomplete/Customize_Item_Appearance)
- [Autocomplete - Configure Search Parameters](/Documentation/Guide/Widgets/Autocomplete/Configure_Search_Parameters)
- [Autocomplete API Reference](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/)

[tags]autocomplete, collection container, collection widget, editor, overview, data source