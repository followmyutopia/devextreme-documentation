Nodes are painted in different colors using a [palette](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#palette). You can apply a DevExtreme palette or create a custom palette.

When the palette does not have enough colors to paint each node differently, it is extended in one of the [palette extension modes](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#paletteExtensionMode). The following code shows how to specify the palette and its extension mode:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            palette: "Bright",
            // or a custom palette
            // palette: ["#70c92f", "#f8ca00", "#bd1550"],
            paletteExtensionMode: "alternate"
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ...
        paletteExtensionMode="alternate"
        palette="Bright">
        <!-- or a custom palette -->
        <!-- [palette]="['#70c92f', '#f8ca00', '#bd1550']"> -->
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

Links also support several [colorization modes](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/#colorMode). They can inherit the color from the source or target node or use a gradient between those two colors:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            link: {
                colorMode: "source" // or "target" | "gradient"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ... >
        <dxo-link
            colorMode="source"> <!-- or "target" | "gradient" -->
        </dxo-link>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

To colorize nodes or links uniformly, specify the color using the **node**.[color](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/#color) or **link**.[color](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/#color) option. Note that the links' **colorMode** option should be *"none"* (which is its default value): 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            node: {
                color: "blue"
            },
            link: {
                color: "green"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ... >
        <dxo-node color="blue"></dxo-node>
        <dxo-link color="green"></dxo-link>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

Below is a demo in which you can choose different predefined palettes, palette extension modes, and link colorization modes:

<div class="simulator-desktop-container" data-view="/Content/Applications/19_1/DataVisualization/Guides/SankeyColorization/colorizeNodes.html, /Content/Applications/19_1/DataVisualization/Guides/SankeyColorization/colorizeNodes.js, /Content/Applications/19_1/DataVisualization/Guides/SankeyColorization/colorizeNodes.css"></div>

#####See Also#####
- [Colorize Node Labels](/Documentation/Guide/Widgets/Sankey/Node_Labels/Colorize_Labels/)
- [Rearrange Nodes](/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Rearrange_Nodes/)
