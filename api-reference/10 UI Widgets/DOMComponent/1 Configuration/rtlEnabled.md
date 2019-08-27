---
id: DOMComponent.Options.rtlEnabled
type: Boolean
default: false
---
---
##### shortDescription
Switches the widget to a right-to-left representation.

---
When this option is set to **true**, the widget text flows from right to left, and the layout of elements is reversed. To switch the entire application/site to the right-to-left representation, assign **true** to the **rtlEnabled** field of the object passed to the [DevExpress.config(config)](/Documentation/ApiReference/Common/utils/#configconfig) method.

    <!--JavaScript-->DevExpress.config({
        rtlEnabled: true
    });

#####See Also#####
- **Right-to-Left Support Demo**: [DataGrid](/Demos/WidgetsGallery/Demo/DataGrid/RightToLeftSupport/jQuery/Light/) | [Navigation Widgets](/Demos/WidgetsGallery/Demo/Common/NavigationRightToLeftSupport/jQuery/Light/) | [Editors](/Demos/WidgetsGallery/Demo/Common/EditorsRightToLeftSupport/jQuery/Light/)