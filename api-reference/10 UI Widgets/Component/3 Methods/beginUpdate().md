---
id: Component.beginUpdate()
---
---
##### shortDescription
Prevents the widget from refreshing until the [endUpdate()]({basewidgetpath}/Methods/#endUpdate) method is called.

---
The **beginUpdate()** and **endUpdate()** methods prevent the widget from excessive updates when you are changing multiple widget settings at once. After the **beginUpdate()** method is called, the widget does not update its UI until the **endUpdate()** method is called.

#####See Also#####
#include common-link-callmethods