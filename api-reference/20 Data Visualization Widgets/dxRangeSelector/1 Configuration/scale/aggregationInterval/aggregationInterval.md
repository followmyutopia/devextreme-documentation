===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'<!--/acceptValues-->
<!--type-->Number | Object | String<!--/type-->
<!--inherits-->..\..\..\..\VizTimeInterval\VizTimeInterval.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Specifies the length of aggregation intervals in scale units. Applies only to the scale of the continuous or logarithmic [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#type).
<!--/shortDescription-->

<!--fullDescription-->
For data aggregation, the scale is divided into intervals. Series points that fall within the same interval get aggregated together. The **aggregationInterval** option defines the length of each interval. 

If the scale displays numbers, assign a number to this option. For example, an **aggregationInterval** of 100 produces the following intervals: 0 to 100, 100 to 200, 200 to 300, etc. If the scale displays date-time values, set this option to one of the accepted string values. Alternatively, you can set it to an object that contains one of the fields described in this section.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#rangeSelectorContainer").dxRangeSelector({
            // ...
            scale: {
                // Interval of one day
                aggregationInterval: "day",
                // Interval of five days
                aggregationInterval: { days: 5 }
            }
        });
    });

##### Angular

    <!--HTML--><dx-range-selector ... >
        <dxo-scale
            aggregationInterval="day"> <!-- Interval of one day -->
            <dxo-aggregation-interval
                [days]="5">            <!-- Interval of five days -->
            </dxo-aggregation-interval>
        </dxo-scale>
    </dx-range-selector>

    <!--TypeScript-->
    import { DxRangeSelectorModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxRangeSelectorModule
        ],
        // ...
    })

---

On a [logarithmic scale](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#type), intervals are based on powers. For example, if the [logarithmBase](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#logarithmBase) is 10 and the **aggregationInterval** is 1, the following intervals are produced: 10<sup>0</sup> to 10<sup>1</sup>, 10<sup>1</sup> to 10<sup>2</sup>, 10<sup>2</sup> to 10<sup>3</sup>, etc. If the **aggregationInterval** becomes 2, intervals become longer: 10<sup>0</sup> to 10<sup>2</sup>, 10<sup>2</sup> to 10<sup>4</sup>, 10<sup>4</sup> to 10<sup>6</sup>, etc.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), you can specify this option using the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *"day"* becomes `Day`.

#####See Also#####
- **chart**.[series](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/#series).[aggregation](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/)
- [aggregationGroupWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#aggregationGroupWidth)
<!--/fullDescription-->