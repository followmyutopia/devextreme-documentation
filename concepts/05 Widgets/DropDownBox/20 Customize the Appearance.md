You can configure the drop-down field using the [dropDownOptions](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#dropDownOptions) object that contains fields described in the [Popup Configuration](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/) section. You can also specify a custom template for the drop-down button in the [dropDownButtonTemplate](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#dropDownButtonTemplate) option.

    <!--JavaScript-->
    $(function () {
        var fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
        $("#dropDownBoxContainer").dxDropDownBox({
            value: fruits[0],
            dataSource: fruits,
            dropDownOptions: {
                title: "Fruits",
                showTitle: true,
                fullScreen: true,
                showCloseButton: true
            },
            dropDownButtonTemplate: function() {
                return $("<img>", { src: "images/icons/custom-dropbutton-icon.svg", class: "custom-icon" });
            },
            contentTemplate: function(e) {
                var $list = $("<div>").dxList({
                    dataSource: e.component.option("dataSource"),
                    selectionMode: "single",
                    onSelectionChanged: function(arg) {
                        e.component.option("value", arg.addedItems[0]);
                    } 
                });
                return $list;
            }
        });
    });
