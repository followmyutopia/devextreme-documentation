<!--id-->viz.currentPalette()<!--/id-->
===================================================================
<!--module-->viz/palette<!--/module-->
<!--export-->currentPalette<!--/export-->
===================================================================

<!--shortDescription-->
Gets the current [palette](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#palette)'s name.
<!--/shortDescription-->

<!--returnType-->String<!--/returnType-->
<!--returnDescription-->
The current palette's name.
<!--/returnDescription-->

<!--fullDescription-->
    <!--JavaScript-->
    var paletteName = DevExpress.viz.currentPalette();
    // ===== or when using modules =====
    import { currentPalette } from 'devextreme/viz/palette';
     
    let paletteName = currentPalette();
<!--/fullDescription-->