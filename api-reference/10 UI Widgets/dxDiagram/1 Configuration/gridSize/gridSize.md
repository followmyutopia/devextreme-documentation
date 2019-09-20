---
id: dxDiagram.Options.gridSize
type: Number | Object
default: 0.125
---
---
##### shortDescription
Specifies the grid pitch.
---
When the [showGrid](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#showGrid) option is set to **true**, the Diagram widget displays grid lines that help users align diagram elements. Use the **gridSize** option to specify the grid pitch.

The [units](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#units) option specifies the measurement unit.

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            viewUnits: "cm",
            units: "cm",
            gridSize: {
                value: 2,
                items: [1, 2, 3]
            },
            // or
            // gridSize: 2,
        });
    });

---

#####See Also#####
- [snapToGrid](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#snapToGrid)
