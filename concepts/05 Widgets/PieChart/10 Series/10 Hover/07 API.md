You can switch a series point into the hover state and back again by calling its [hover()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#hover) and [clearHover()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#clearHover) method, respectively.

---
##### jQuery

    <!--JavaScript-->
    var togglePointHoverState = function (point) {
        !point.isHovered() ? point.hover() : point.clearHover();        
    }

##### Angular

    <!--TypeScript-->
    export class AppComponent {
        toggleSeriesHoverState (point) {
            !point.isHovered() ? point.hover() : point.clearHover();
        }
    }

---

#####See Also#####
- [Access a Point Using the API](/Documentation/Guide/Widgets/PieChart/Series/Access_a_Point_Using_the_API/)
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
