---
id: viz.currentPalette()
module: viz/palette
export: currentPalette
---
---
##### shortDescription
Gets the current [palette](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#palette)'s name.

##### return: String
The current palette's name.

---
<!--JavaScript-->
    var paletteName = DevExpress.viz.currentPalette();
    // ===== or when using modules =====
    import { currentPalette } from 'devextreme/viz/palette';
     
    let paletteName = currentPalette();