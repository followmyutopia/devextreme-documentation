---
id: dxGantt.Options.editing.allowTaskDeleting
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can delete [tasks]({basewidgetpath}/Configuration/#tasks).

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowTaskDeleting: false, 
                //...
            }
        });
    }); 

---
