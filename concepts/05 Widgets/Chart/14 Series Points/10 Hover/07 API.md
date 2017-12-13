You can switch a point into the hover state by calling its [hover()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#hover) method, and its [clearHover()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#clearHover) method to switch it back to the normal state. The same API is available [for series](/Documentation/Guide/Widgets/Chart/Series/Hover/#API). 

---
##### jQuery

    <!--JavaScript-->
    var togglePointHoverState = function (point) {
        !point.isHovered() ? point.hover() : point.clearHover();        
    }

##### Angular

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        togglePointHoverState (point) {
            !point.isHovered() ? point.hover() : point.clearHover();
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
- [Access a Series Point Using the API](/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/)
#include common-link-callmethods
