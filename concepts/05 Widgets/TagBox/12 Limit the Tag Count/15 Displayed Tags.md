Specify the [maxDisplayTags](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#maxDisplayedTags) option to limit the number of displayed tags. In this case, when the specified limit is exceeded, the widget replaces tags with a single multi-tag displaying the number of selected items. The **TagBox** can display the multi-tag alone or with ordinary tags depending on the [showMultiTagOnly](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showMultiTagOnly) option's value.

    <!--JavaScript-->
    $(function(){
        var simpleProducts = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ];

        $("#productsSimple").dxTagBox({
            dataSource: simpleProducts,
            maxDisplayedTags: 3,
            showMultiTagOnly: false
        });
    });

<a href="http://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/TagCountLimitation/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
