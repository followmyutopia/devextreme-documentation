You can switch a series into the hover state by calling its [hover()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#hover) method, and its [clearHover()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#clearHover) method to switch it back to the normal state. The same API is available [for series points](/Documentation/Guide/Widgets/Chart/Series_Points/Hover/#API). 

---
##### jQuery

    <!--JavaScript-->
    var toggleSeriesHoverState = function (series) {
        !series.isHovered() ? series.hover() : series.clearHover();        
    }

##### Angular

    <!--TypeScript-->
    export class AppComponent {
        toggleSeriesHoverState (series) {
            !series.isHovered() ? series.hover() : series.clearHover();
        }
    }

---

#####See Also#####
- [Access a Series Using the API](/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/)
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
