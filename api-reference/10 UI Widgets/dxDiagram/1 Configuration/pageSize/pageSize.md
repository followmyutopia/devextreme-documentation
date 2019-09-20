---
id: dxDiagram.Options.pageSize
type: Object
---
---
##### shortDescription
Specifies a size of pages.
---
The [units](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#units) option specifies the page's measurement units.

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            units: "cm",
		    pageSize: {
                width: 10,
                height: 10,
            },
        });
    });

---

[note] If you call the [import](/Documentation/ApiReference/UI_Widgets/dxDiagram/Methods/#importdata_updateExistingItemsOnly) method, the **import** method applies the imported page settings and the **pageColor** option is ignored.