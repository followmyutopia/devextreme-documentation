You can use SVG icons instead of font icons. The following code demonstrates how to use them in the [Button](/Demos/WidgetsGallery/Demo/Button/Icons/jQuery/Light/) widget. The same technique can be used for widgets with the [icon](/Documentation/ApiReference/UI_Widgets/dxButton/Default_Template/#icon) option. 

An SVG icon can be specified as follows:

1. **By the URL**:

        <!-- tab: JavaScript -->
        new DevExpress.ui.dxButton(targetElement, {
            icon: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
        });

1. **Inserted inline**:

        <!-- tab: JavaScript -->
        new DevExpress.ui.dxButton(targetElement, {
            icon: "<svg>SVG_CONTENT</svg>"
        });

1. **Imported**:

        <!-- tab: JavaScript -->
        import * as myIcon from "./assets/icon.svg";
        new DevExpress.ui.dxButton(targetElement, {
            icon: myIcon
        });

[important]The SVG format allows you to run executable code that might be malicious. It is strongly recommend that you use SVG icons only from trusted sources.
