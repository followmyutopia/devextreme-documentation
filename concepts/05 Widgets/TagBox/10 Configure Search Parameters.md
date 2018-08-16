[note] Searching works when inputting a plain data structure only. However, if you need the searching capability and hierarchical data, transform the plain data using the **DataSource**'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option.

The **TagBox** widget allows an end user to search through its items. This feature is disabled by default. To enable it, assign **true** to the [searchEnabled](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#searchEnabled) option. Use the [searchExpr](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#searchExpr) option to specify which data fields should be searched. Assign an _array_ of field names to this option if you need to search several fields.

---
#####jQuery

    <!--JavaScript-->
    var tagBoxData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: ['capital', 'country']
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="country"
        [searchEnabled]="true"
        [searchExpr]="['country', 'capital']">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

---

When a user types a string in the input field, the **TagBox** suggests all items that *contain* this string. Assign *'startswith'* to the [searchMode](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#searchMode) option if you want the **TagBox** to suggest only those items that _start_ with the input string.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: 'country',
            searchMode: 'startswith'
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="country"
        [searchEnabled]="true"
        searchExpr="country"
        searchMode="startswith">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

---

There is a delay between the moment a user finishes typing and the moment the search is executed. To increase or descrease it, use the [searchTimeout](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#searchTimeout) option. The delay is measured in milliseconds.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: 'country',
            searchTimeout: 1000
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="country"
        [searchEnabled]="true"
        searchExpr="country"
        [searchTimeout]="1000">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

---

The **TagBox** widget starts searching after a user has typed at least one character by default. Use the **minSearchLength** option to increase the number of characters that triggers the search. 

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: "country",
            minSearchLength: 3
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="country"
        [searchEnabled]="true"
        searchExpr="country"
        [minSearchLength]="3">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

---

#####See Also#####
- [TagBox - Create a User-Defined Item](/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/)
- [TagBox - Control the Behavior](/Documentation/Guide/Widgets/TagBox/Control_the_Behavior/)
- [TagBox - Handle the Value Change Event](/Documentation/Guide/Widgets/TagBox/Handle_the_Value_Change_Event/)
- [TagBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTagBox/)
- [TagBox Demos](/Demos/WidgetsGallery/#demo/editors-tag_box-overview)

[tags]tagBox, tag box, editor, search, search mode, search expression, time interval, delay, search timeout, min search length
