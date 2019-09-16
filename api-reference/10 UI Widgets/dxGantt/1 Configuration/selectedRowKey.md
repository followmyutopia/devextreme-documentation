---
id: dxGantt.Options.selectedRowKey
type: any
default: undefined
---
---
##### shortDescription
Allows you to select a row or determine which row is selected.

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gantt/Overview/jQuery/Light/"
}

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            selectedRowKey: 1,
            // ...
        });
    }); 

---

#####See Also#####
- [allowSelection](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#allowSelection) 
- [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#onSelectionChanged)
