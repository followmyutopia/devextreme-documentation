[note]In this document, "size" means the width or the height of an item depending on whether the [direction](/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/#direction) option is set to *"row"* or *"col"* respectively.

The size of an item is specified by the [baseSize](/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#baseSize) and [ratio](/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#ratio) options. They can be used separately and together. If the **baseSize** alone is used, the size of an item is specified precisely. If the **Box** is bigger than all its inner elements combined, an area is left unoccupied.

![DevExtreme HTML5 LayoutWidget Box](/Content/images/doc/17_1/UiWidgets/Box/Box_baseSize.png)

    <!--HTML--><div id="boxContainer">
        <div class="box-item orange" data-options="dxItem: { baseSize: 200 }"> Item 1 </div>
        <div class="box-item yellow" data-options="dxItem: { baseSize: 100 }"> Item 2 </div>
        <div class="box-item green"  data-options="dxItem: { baseSize: 150 }"> Item 3 </div>
    </div>

<!---->

    <!--JavaScript-->$(function() {
        $("#boxContainer").dxBox({
            direction: "row",
            height: 100,
            width: 600
        });
    });

<!---->

    <!--CSS-->.box-item {
        text-align: center;
        padding-top: 34px;
        font-size: 16px;
    }

    .orange { background: #f39e6c }
    .yellow { background: #f5e5a6 }
    .green { background: #94d7c7 }


If the **ratio** option alone is used, the size of an item depends on how big the **Box** is, how many other items it contains and what their **ratio** is. In this case, the whole **Box** is always occupied. For example, on the following image, *Item 2* is twice bigger than *Item 3*, but three times smaller than *Item 1*.

![DevExtreme HTML5 LayoutWidget Box](/Content/images/doc/17_1/UiWidgets/Box/Box_ratio.png)

    <!--HTML--><div id="boxContainer">
        <div class="box-item orange" data-options="dxItem: { ratio: 6 }"> Item 1 </div>
        <div class="box-item yellow" data-options="dxItem: { ratio: 2 }"> Item 2 </div>
        <div class="box-item green"  data-options="dxItem: { ratio: 1 }"> Item 3 </div>
    </div>

If the **baseSize** and **ratio** options are used both, the size of an item equals the **bazeSize** plus a piece of the unoccupied area; the bigger the **ratio** the bigger this piece is.

![DevExtreme HTML5 LayoutWidget Box](/Content/images/doc/17_1/UiWidgets/Box/Box_baseSizeWithRatio.png)

    <!--HTML--><div id="boxContainer">
        <div class="box-item orange" data-options="dxItem: { baseSize: 200, ratio: 6 }"> Item 1 </div>
        <div class="box-item yellow" data-options="dxItem: { baseSize: 100, ratio: 2 }"> Item 2 </div>
        <div class="box-item green"  data-options="dxItem: { baseSize: 150, ratio: 1 }"> Item 3 </div>
    </div>

#####See Also#####
- [Box - Arrange and Align Items](/Documentation/Guide/Widgets/Box/Arrange_and_Align_Items/)
- [Box Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-box-overview)
- [Box API Reference](/Documentation/ApiReference/UI_Widgets/dxBox/)

[tags]box, item size, item height, item width, baseSize, ratio
