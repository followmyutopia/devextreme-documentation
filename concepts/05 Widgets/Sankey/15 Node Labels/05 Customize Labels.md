[note] This article describes the options that customize labels' text. Labels have other customization options, such as [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/font/), [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/border/), [shadow](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/shadow/), and so on. Refer to the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/) API reference section for more information about them.

You can use the [customizeText](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/#customizeText) function to change the labels' text. Its argument contains a [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/) object that provides information about the node being customized. The function should return a string value that will be used as a label's text.

In the following example, the **customizeText** function is used to add incoming and outgoing weight values to the label:

---
##### jQuery

    <!--JavaScript-->$(function() {
        var weightsReducer = function(accumulator, currentValue) {
            return accumulator + currentValue.weight;
        }

        $("#sankeyContainer").dxSankey({
            // ...
            label: {
                customizeText: function(node) {
                    return node.title + " (in: " + node.linksIn.reduce(weightsReducer, 0) + ", " +
                        + "out: " + node.linksOut.reduce(weightsReducer, 0) + ")";
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        constructor() {
            this.sankey_label_customizeText = this.sankey_label_customizeText.bind(this);
        }
        weightsReducer(accumulator, currentValue) {
            return accumulator + currentValue.weight;
        }
        sankey_label_customizeText(node) {
            return node.title + " (in: " + node.linksIn.reduce(this.weightsReducer, 0) + ", " +
                + "out: " + node.linksOut.reduce(this.weightsReducer, 0) + ")";
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

    <!--HTML--><dx-sankey ... >
        <dxi-series>
            <dxo-label
                [customizeText]="sankey_label_customizeText">
            </dxo-label>
        </dxi-series>
    </dx-sankey>

---

#####See Also#####
- [Colorize Labels](/Documentation/Guide/Widgets/Sankey/Node_Labels/Colorize_Labels/)
- [Resolve Label Overlapping](/Documentation/Guide/Widgets/Sankey/Node_Labels/Resolve_Overlapping/)
- [Sankey API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/)
