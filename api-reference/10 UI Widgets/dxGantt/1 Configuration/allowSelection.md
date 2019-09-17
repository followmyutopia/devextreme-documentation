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
- [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#onSelectionChanged) 
- [selectedRowKey](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#selectedRowKey)
