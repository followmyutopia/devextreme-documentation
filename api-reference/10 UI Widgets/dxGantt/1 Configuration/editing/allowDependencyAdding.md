---
id: dxGantt.Options.editing.allowDependencyAdding
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can add [dependencies]({basewidgetpath}/Configuration/#dependencies).

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowDependencyAdding: false, 
                //...
            }
        });
    }); 

---
