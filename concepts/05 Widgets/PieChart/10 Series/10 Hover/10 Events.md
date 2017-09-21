When a user hovers the mouse pointer on a series point, the **PieChart** fires the [pointHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#pointHoverChanged) event that you can handle with a function. Assign this function to the [onPointHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onPointHoverChanged) option when you configure the widget if it is going to remain unchanged during the widget's lifetime. Call the point's [isHovered()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#isHovered) method to check whether the pointer entered or left a series point.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            onPointHoverChanged: function (e) {
                var point = e.target;
                if (point.isHovered()) {
                    // Command to execute when the mouse pointer enters the point
                } else {
                    // Command to execute when the mouse pointer leaves the point
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        (onPointHoverChanged)="onPointHoverChanged($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onPointHoverChanged (e) {
            let point = e.target;
            if (point.isHovered()) {
                // Command to execute when the mouse pointer enters the point
            } else {
                // Command to execute when the mouse pointer leaves the point
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

Subscribe to the **pointHoverChanged** event using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#oneventName_eventHandler) method if you are going to change the event handler at runtime or if you need to attach several handlers to it. This approach is more typical of jQuery.

    <!--JavaScript-->
    var pointHoverChangedHandler1 = function (e) {
        var point = e.target;
        // The "pointHoverChanged" event's first handler
    };

    var pointHoverChangedHandler2 = function (e) {
        var point = e.target;
        // The "pointHoverChanged" event's second handler
    };

    $("#pieChartContainer").dxPieChart("instance")
        .on("pointHoverChanged", pointHoverChangedHandler1)
        .on("pointHoverChanged", pointHoverChangedHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
