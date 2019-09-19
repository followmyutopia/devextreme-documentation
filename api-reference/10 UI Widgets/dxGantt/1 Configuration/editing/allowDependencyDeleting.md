---
id: dxGantt.Options.editing.allowDependencyDeleting
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can delete [dependencies]({basewidgetpath}/Configuration/#dependencies).

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowDependencyDeleting: false, 
                //...
            }
        });
    }); 

---
