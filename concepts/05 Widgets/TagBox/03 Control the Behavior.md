By default, the **TagBox** closes the drop-down list _immediately_ after a user selects an item from it. Therefore, the user has to open the list again if he/she wants to select another item. To enable the user to select multiple items without reopening the list, set the [applyValueMode](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#applyValueMode) option to *"useButtons"*. In this case, the list is not closed until the user clicks the **OK** button. To make multiple selection even easier for the user, add selection controls to the **TagBox** using the [showSelectionControls](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showSelectionControls) option.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            applyValueMode: 'useButtons',
            showSelectionControls: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        applyValueMode="useButtons"
        [showSelectionControls]="true">
    <dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
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

When selected items overflow the input field, they are arranged in several lines. To disable this behavior, set the [multiline](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#multiline) option to **false**.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            multiline: false
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        [multiline]="false">
    <dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
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

By default, selected items stay in the drop-down list. If they should be hidden after being selected, set the [hideSelectedItems](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#hideSelectedItems) option to **true**.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            hideSelectedItems: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        [hideSelectedItems]="true">
    <dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
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

The **TagBox** allows a user to clear selection in one click on the **Clear** button. To show this button, assign **true** to the [showClearButton](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showClearButton) option.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            showClearButton: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        [showClearButton]="true">
    <dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
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
- [TagBox - Handle the Value Change Event](/Documentation/Guide/Widgets/TagBox/Handle_the_Value_Change_Event/)
- [TagBox - Create a User-Defined Item](/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/)
- [TagBox - Configure Search Parameters](/Documentation/Guide/Widgets/TagBox/Configure_Search_Parameters/)
- [TagBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTagBox/)
- [TagBox Demos](/Demos/WidgetsGallery/#demo/editors-tag_box-overview)

[tags]tagBox, tag box, editor, apply value mode, select all, selection controls, hide selected items, clear selection, clear button