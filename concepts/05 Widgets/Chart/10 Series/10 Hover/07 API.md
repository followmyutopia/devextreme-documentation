You can switch a series into the hover state by calling its [hover()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#hover) method, and its [clearHover()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#clearHover) method to switch it back to the normal state. The same API is available [for series points](/Documentation/Guide/Widgets/Chart/Series_Points/Hover/#API). 

---
##### jQuery

    <!--JavaScript-->
    var toggleSeriesHoverState = function (series) {
        !series.isHovered() ? series.hover() : series.clearHover();        
    }

##### Angular

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        toggleSeriesHoverState (series) {
            !series.isHovered() ? series.hover() : series.clearHover();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

#####See Also#####
- [Access a Series Using the API](/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/)
#include common-link-callmethods
