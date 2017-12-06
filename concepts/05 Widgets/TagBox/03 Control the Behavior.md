By default, the **TagBox** closes the drop-down list _immediately_ after a user selects an item from it. Therefore, the user has to open the list again if he/she wants to select another item. To enable the user to select multiple items without reopening the list, set the [applyValueMode](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#applyValueMode) option to *"useButtons"*. In this case, the list is not closed until the user clicks the **OK** button. To make multiple selection even easier for the user, add selection controls to the **TagBox** using the [showSelectionControls](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showSelectionControls) option.

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            applyValueMode: 'useButtons',
            showSelectionControls: true
        });
    });

When selected items overflow the input field, they are arranged in several lines. To disable this behavior, set the [multiline](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#multiline) option to **false**.

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            multiline: false
        });
    });

By default, selected items stay in the drop-down list. If they should be hidden after being selected, set the [hideSelectedItems](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#hideSelectedItems) option to **true**.

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            hideSelectedItems: true
        });
    });

The **TagBox** allows a user to clear selection in one click on the **Clear** button. To show this button, assign **true** to the [showClearButton](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showClearButton) option.

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            showClearButton: true
        });
    });

#####See Also#####
- [TagBox - Handle the Value Change Event](/Documentation/Guide/Widgets/TagBox/Handle_the_Value_Change_Event/)
- [TagBox - Create a User-Defined Item](/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/)
- [TagBox - Configure Search Parameters](/Documentation/Guide/Widgets/TagBox/Configure_Search_Parameters/)
- [TagBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTagBox/)
- [TagBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-tag_box-overview)

[tags]tagBox, tag box, editor, apply value mode, select all, selection controls, hide selected items, clear selection, clear button