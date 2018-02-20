You can switch a series point into the hover state and back again by calling its [hover()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#hover) and [clearHover()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#clearHover) method, respectively.

---
##### jQuery

    <!--JavaScript-->
    var togglePointHoverState = function (point) {
        !point.isHovered() ? point.hover() : point.clearHover();        
    }

##### Angular

    <!--TypeScript-->
    import { DxPieChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        toggleSeriesHoverState (point) {
            !point.isHovered() ? point.hover() : point.clearHover();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

#####See Also#####
- [Access a Point Using the API](/Documentation/Guide/Widgets/PieChart/Series/Access_a_Point_Using_the_API/)
#include common-link-callmethods
