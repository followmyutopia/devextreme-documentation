All **ResponsiveBox** elements are arranged against a layout grid defined by the [rows](/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/rows/) and [cols](/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/cols/) arrays. Each object in these arrays configures a single row or column. If you need two sets of equally-sized rows and columns, simply populate these arrays with empty objects.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            // Creates two rows of equal height
            rows: [
                { }, { }
            ],
            // Creates three columns of equal width
            cols: [
                { }, { }, { }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <html style="height:100%">
        <body style="height:100%">
            <dx-responsive-box id="responsiveBox">
                <!-- Creates two rows of equal height -->
                <dxi-row></dxi-row>
                <dxi-row></dxi-row>
                <!-- Creates three columns of equal width -->
                <dxi-col></dxi-col>
                <dxi-col></dxi-col>
                <dxi-col></dxi-col>
            </dx-responsive-box>
        </body>
    </html>

    <!--TypeScript-->
    import { DxResponsiveBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxResponsiveBoxModule
        ],
        // ...
    })

---

To set the size of a row/column, use the **ratio** and **baseSize** options. The **ratio** option specifies the size of a row/column in relation to other rows/columns. If you use this option alone, the **ResponsiveBox** occupies the entire area assigned to it.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            rows: [
                { ratio: 1 },
                { ratio: 2 },
                { ratio: 0.5 }
            ],
            cols: [
                { ratio: 0.5 },
                { ratio: 2 },
                { ratio: 0.5 }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <html style="height:100%">
        <body style="height:100%">
            <dx-responsive-box id="responsiveBox">
                <dxi-row [ratio]="1"></dxi-row>
                <dxi-row [ratio]="2"></dxi-row>
                <dxi-row [ratio]="0.5"></dxi-row>
                <dxi-col [ratio]="0.5"></dxi-col>
                <dxi-col [ratio]="2"></dxi-col>
                <dxi-col [ratio]="0.5"></dxi-col>
            </dx-responsive-box>
        </body>
    </html>

    <!--TypeScript-->
    import { DxResponsiveBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxResponsiveBoxModule
        ],
        // ...
    })

---

If you need to set the size of a row/column in pixels, set the **ratio** to *0* and specify the **baseSize** option. In this case, if the **ResponsiveBox** is bigger than all its elements combined, an area is left unoccupied.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            height: 500,
            width: 500,
            // Rows occupy a total height of 450 pixels, 50 pixels left
            rows: [
                { ratio: 0, baseSize: 150 },
                { ratio: 0, baseSize: 200 },
                { ratio: 0, baseSize: 100 }
            ],
            // Columns occupy a total width of 300 pixels, 200 pixels left
            cols: [
                { ratio: 0, baseSize: 50 },
                { ratio: 0, baseSize: 200 },
                { ratio: 0, baseSize: 50 }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <html style="height:100%">
        <body style="height:100%">
            <dx-responsive-box id="responsiveBox"
                [height]="500"
                [width]="500">
                <!-- Rows occupy a total height of 450 pixels, 50 pixels left -->
                <dxi-row [ratio]="0" [baseSize]="150"></dxi-row>
                <dxi-row [ratio]="0" [baseSize]="200"></dxi-row>
                <dxi-row [ratio]="0" [baseSize]="100"></dxi-row>
                <!-- Columns occupy a total width of 300 pixels, 200 pixels left -->
                <dxi-col [ratio]="0" [baseSize]="50"></dxi-col>
                <dxi-col [ratio]="0" [baseSize]="200"></dxi-col>
                <dxi-col [ratio]="0" [baseSize]="50"></dxi-col>
            </dx-responsive-box>
        </body>
    </html>

    <!--TypeScript-->
    import { DxResponsiveBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxResponsiveBoxModule
        ],
        // ...
    })

---

To redistribute the unoccupied area between rows/columns, specify the **ratio** more than 0. The greater the **ratio** assigned to a row/column, the bigger the area added to this row/column.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            height: 500,
            width: 500,
            rows: [
                { ratio: 1, baseSize: 150 },
                { ratio: 2, baseSize: 200 },
                { ratio: 1, baseSize: 100 }
            ],
            cols: [
                { ratio: 1, baseSize: 50 },
                { ratio: 2, baseSize: 200 },
                { ratio: 1, baseSize: 50 }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <html style="height:100%">
        <body style="height:100%">
            <dx-responsive-box id="responsiveBox"
                [height]="500"
                [width]="500">
                <dxi-row [ratio]="1" [baseSize]="150"></dxi-row>
                <dxi-row [ratio]="2" [baseSize]="200"></dxi-row>
                <dxi-row [ratio]="1" [baseSize]="100"></dxi-row>
                <dxi-col [ratio]="1" [baseSize]="50"></dxi-col>
                <dxi-col [ratio]="2" [baseSize]="200"></dxi-col>
                <dxi-col [ratio]="1" [baseSize]="50"></dxi-col>
            </dx-responsive-box>
        </body>
    </html>

    <!--TypeScript-->
    import { DxResponsiveBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxResponsiveBoxModule
        ],
        // ...
    })

---

The collections of rows and columns may differ depending on the screen's [size qualifier](/Documentation/Guide/Widgets/ResponsiveBox/Size_Qualifiers/). To specify on which screen types an individual row or column should appear, use the **screen** option. By default, all rows and columns appear on all screen types.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            rows: [
                { ratio: 1 },
                { ratio: 2 },
                { ratio: 0.7 }
            ],
            cols: [
                { ratio: 0.5 },
                // The following columns appear on medium and large screens only
                { ratio: 2, screen: "md lg" },
                { ratio: 0.5, screen: "md lg" }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <html style="height:100%">
        <body style="height:100%">
            <dx-responsive-box id="responsiveBox">
                <dxi-row [ratio]="1"></dxi-row>
                <dxi-row [ratio]="2"></dxi-row>
                <dxi-row [ratio]="0.7"></dxi-row>
                <dxi-col [ratio]="0.5"></dxi-col>
                <!-- The following columns appear on medium and large screens only -->
                <dxi-col [ratio]="2" screen="md lg"></dxi-col>
                <dxi-col [ratio]="0.5" screen="md lg"></dxi-col>
            </dx-responsive-box>
        </body>
    </html>

    <!--TypeScript-->
    import { DxResponsiveBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxResponsiveBoxModule
        ],
        // ...
    })

---

#####See Also#####
- [ResponsiveBox - Arrange Layout Elements](/Documentation/Guide/Widgets/ResponsiveBox/Arrange_Layout_Elements/)
- [ResponsiveBox - Size Qualifiers](/Documentation/Guide/Widgets/ResponsiveBox/Size_Qualifiers/)
- [ResponsiveBox Demos](/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-responsive_box-overview/tablet-landscape)
- [ResponsiveBox API Reference](/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/)

[tags]responsive box, responsiveBox, adaptive layout, layout grid, fixed columns, fixed rows, adaptive columns, adaptive rows, baseSize, ratio