---
id: dxGantt.Options.editing
type: Object
---
---
##### shortDescription
Configures edit options.

---

The widget allows users to add, modify and delete tasks, resources and dependencies. Set the [enabled]({basewidgetpath}/Configuration/editing/#enabled) option to **true** to enable edit functionality. 

[note] Make sure that your data sources ([tasks]({basewidgetpath}/Configuration/#tasks), [resources]({basewidgetpath}/Configuration/#resources) and [dependencies]({basewidgetpath}/Configuration/#dependencies)) support edit actions.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gantt/Overview/jQuery/Light/"
}

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                //...
            }
        });
    }); 

---