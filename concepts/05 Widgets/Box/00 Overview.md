The **Box** widget allows you to arrange various elements within it. This widget is separate and adaptive and acts as the layout's building block.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-box-overview"
}

The following code adds a simple **Box** containing three items to your page. These items are plain texts placed in differently-colored rectangles arranged in a row. Equal **ratio** option values ensure they have equal widths.

---
##### jQuery

    <!--HTML--><div id="boxContainer">
        <div class="box-item orange" data-options="dxItem: { ratio: 1 }"> Item 1 </div>
        <div class="box-item yellow" data-options="dxItem: { ratio: 1 }"> Item 2 </div>
        <div class="box-item green"  data-options="dxItem: { ratio: 1 }"> Item 3 </div>
    </div>

    <!--JavaScript-->$(function() {
        $("#boxContainer").dxBox({
            direction: "row",
            height: 100
        });
    });

    <!--CSS-->.box-item {
        text-align: center;
        padding-top: 34px;
        font-size: 16px;
    }

    .orange { background: #f39e6c }
    .yellow { background: #f5e5a6 }
    .green { background: #94d7c7 }

##### Angular

    <!--HTML-->
    <dx-box
        direction="row"
        [height]="100">
        <dxi-item class="box-item orange" [ratio]="1"> Item 1 </dxi-item>
        <dxi-item class="box-item yellow" [ratio]="1"> Item 2 </dxi-item>
        <dxi-item class="box-item green"  [ratio]="1"> Item 3 </dxi-item>
    </dx-box>

    <!--TypeScript-->
    import { DxBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxBoxModule
        ],
        // ...
    })

    <!--CSS-->.box-item {
        text-align: center;
        padding-top: 34px;
        font-size: 16px;
    }

    .orange { background: #f39e6c }
    .yellow { background: #f5e5a6 }
    .green { background: #94d7c7 }

---

Note that the **Box** items in the code above are declared using the [dxItem](/Documentation/ApiReference/UI_Widgets/Markup_Components/#dxItem) markup component. An object passed to this component can have the following fields:

- [baseSize](/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#baseSize)
- [ratio](/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#ratio)
- [shrink](/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#shrink)
- [template](/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#template)
- [visible](/Documentation/ApiReference/UI_Widgets/dxBox/Default_Item_Template/#visible)

#####See Also#####
#include common-link-configurewidget
- [Box - Specify an Item Size](/Documentation/Guide/Widgets/Box/Specify_an_Item_Size/)
- [Box - Arrange and Align Items](/Documentation/Guide/Widgets/Box/Arrange_and_Align_Items/)
- [Box - Nest One Box into Another](/Documentation/Guide/Widgets/Box/Nest_One_Box_into_Another/)
- [Box API Reference](/Documentation/ApiReference/UI_Widgets/dxBox/)

[tags]box, layout widget, overview, dxItem
