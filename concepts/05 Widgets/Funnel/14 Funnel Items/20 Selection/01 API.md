The selection capability is not provided out of the box, but it can be implemented using the [onItemClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onItemClick) event handler. The following code gives an example for the scenario when a click on a funnel item selects it, and a subsequent click on the same item clears the selection. To check whether the funnel item is already selected, its [isSelected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/Methods/#isSelected) method is called.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            onItemClick: function (e) {
                e.item.select(!e.item.isSelected())
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel
        (onItemClick)="onItemClick($event)">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onItemClick (e) {
            e.item.select(!e.item.isSelected())
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

In the previous code example, selection was cleared of a specific item. If you need to clear selection of all items, call the **Funnel**'s [clearSelection()](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#clearSelection) method.

---
##### jQuery

    <!--JavaScript-->$("#funnelContainer").dxFunnel("clearSelection");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxFunnelModule, DxFunnelComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxFunnelComponent) funnel: DxFunnelComponent;
        clearSelection() {
            this.funnel.instance.clearSelection();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [Access a Funnel Item Using the API](/Documentation/Guide/Widgets/Funnel/Funnel_Items/Access_a_Funnel_Item_Using_the_API/)
