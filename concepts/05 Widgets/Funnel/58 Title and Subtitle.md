Titles and subtitles are textual elements that provide an overview of what the **Funnel** visualizes.

![Funnel Title and Subtitle](/Content/images/doc/19_2/funnel/visual_elements/funnel-title.png)

The [title](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/title/) object configures the title; the **title**.[subtitle](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/title/subtitle/) object configures the subtitle.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            title: {
                text: "I am the Title",
                subtitle: {
                    text: "I am the Subtitle"
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-title
            text="I am the Title">
            <dxo-subtitle
                text="I am the Subtitle">
            </dxo-subtitle>
        </dxo-title>
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/FunnelChart/jQuery/Light/"
}

You can set the title's text more concisely by assigning it directly to the **title** option. This is useful if you are satisfied with the title's default settings and do not need a subtitle. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            title: "I am the Title"
        });
    });

##### Angular

    <!--HTML--><dx-funnel ...
        text="I am the Title">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

Refer to the API reference's [title](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/title/) section for information about all the title and subtitle options.

#####See Also#####
- [Adaptive Layout](/Documentation/Guide/Widgets/Funnel/Adaptive_Layout/)
