---
id: dxGantt.Options.allowSelection
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether users can select tasks in the **Gantt**.

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gantt/Overview/jQuery/Light/"
}

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            allowSelection: false,
            // ...
        });
    });

---

#####See Also#####
- [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#onSelectionChanged') 
- [selectedRowKey](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/selectedRowKey.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#selectedRowKey')
