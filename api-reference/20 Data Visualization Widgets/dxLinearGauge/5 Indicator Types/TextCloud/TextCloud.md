---
id: linearTextCloud
type: Object
inherits: CommonIndicator
---
---
##### shortDescription
An object that defines a gauge indicator of the **textCloud** type.

##### hidePropertyOf

---
---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#linearGaugeContainer").dxLinearGauge({
            value: 40,
            valueIndicator: { // or subvalueIndicator
                type: "textCloud",
                // ...
                // The rest of the indicator options go here
                // ...
            }
        });
    });

    <!--HTML-->
    <div id="linearGaugeContainer"></div>

##### Angular  

    <!--HTML-->
    <dx-linear-gauge [value]="40">
        <dxo-value-indicator <!-- or dxo-subvalue-indicator -->
            type="textCloud"
            <!-- ... -->
            <!-- The rest of the indicator options go here -->
            <!-- ... -->>
        </dxo-value-indicator>
    </dx-linear-gauge>

    <!--TypeScript-->
    import { DxLinearGaugeModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxLinearGaugeModule
        ],
        // ...
    })

##### ASP.NET MVC Controls
    
    <!--Razor C#-->
    @(Html.DevExtreme().LinearGauge()
        .ID("linearGauge")
        .Value(40)
        .ValueIndicator(vi => vi // or .SubvalueIndicator
            .Type(GaugeIndicatorType.TextCloud)
            // ...
            // The rest of the indicator options go here
            // ...
        )
    )

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gauges/DifferentValueIndicatorTypesLinearGauge/"
}