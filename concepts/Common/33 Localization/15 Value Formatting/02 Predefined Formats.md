Predefined formats are string literals for formatting numbers and dates. See the **format**.[type](/Documentation/ApiReference/Common/Object_Structures/format/#type) description for a full list.

Set the widget option called **format** to apply a predefined format. In the following code, this option specifies the format and precision of the tooltip's value in the **Slider** widget. A precision value of 2 means that the value always contains two decimal digits.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            min: 0, max: 10,
            value: 6, step: 0.01,
            tooltip: {
                enabled: true,
                format: {
                    type: "fixedPoint",
                    precision: 2
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-slider
        [min]="0" [max]="10"
        [(value)]="sliderValue" [step]="0.01">
        <dxo-tooltip
            [enabled]="true">
            <dxo-format
                type="fixedPoint"
                [precision]="2">
            </dxo-format>
        </dxo-tooltip>
    </dx-slider>

    <!--TypeScript-->
    import { DxSliderModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        sliderValue = 6;
    }
    @NgModule({
        imports: [
            // ...
            DxSliderModule
        ],
        // ...
    })

---

The **format** option in the previous example is specified with an object which allows specifying the precision. If you do not need precision, you can specify the **format** option with a string literal.

[note] The predefined formats also include a currency format which only adds a dollar sign before the value. To correctly localize and format currencies, add a [localization library](/Documentation/Guide/Common/Localization/#Using_Localization_Libraries) to your app.

#####See Also#####
- [RangeSelector Formatting Demo](/Demos/WidgetsGallery/Demo/RangeSelector/CustomFormatting/jQuery/Light/)
