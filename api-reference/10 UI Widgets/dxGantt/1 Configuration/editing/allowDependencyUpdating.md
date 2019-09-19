---
id: dxGantt.Options.editing.allowDependencyUpdating
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can update [dependencies]({basewidgetpath}/Configuration/#dependencies).

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowDependencyUpdating: false, 
                //...
            }
        });
    }); 

---
