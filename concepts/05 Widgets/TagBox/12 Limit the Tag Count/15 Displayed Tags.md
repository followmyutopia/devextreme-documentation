Specify the [maxDisplayedTags](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#maxDisplayedTags) option to limit the number of displayed tags. In this case, when the specified limit is exceeded, the widget replaces tags with a single multi-tag displaying the number of selected items. The **TagBox** can display the multi-tag alone or with ordinary tags depending on the [showMultiTagOnly](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showMultiTagOnly) option's value.

    <!--JavaScript-->
    $(function(){
        var products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ];

        $("#tagBoxContainer").dxTagBox({
            dataSource: products,
            maxDisplayedTags: 3,
            showMultiTagOnly: false
        });
    });

You can also customize the multi-tag within the [onMultiTagPreparing](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onMultiTagPreparing) event handler. In the following code, the multi-tag's text is changed and it is shown only when a user selects all items:

    <!--JavaScript-->
    $(function(){
        $("#tagBoxContainer").dxTagBox({
            dataSource: products,
            maxDisplayedTags: 2,
            onMultiTagPreparing: function (args) {
                var selectedItemsLength = args.selectedItems.length,
                    totalCount = products.length;
                if (selectedItemsLength < totalCount) {
                    args.cancel = true;
                } else {
                    args.text = "All selected (" + selectedItemsLength + ")";
                    args.multiTagElement.addClass("red");
                }
            }
        });
    });

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/TagBox/TagCountLimitation/jQuery/Light/"
}
