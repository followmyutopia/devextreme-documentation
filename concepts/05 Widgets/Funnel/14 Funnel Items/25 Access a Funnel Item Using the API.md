Call the [getAllItems()](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#getAllItems) method to access funnel items. It returns a collection of objects whose fields and methods are described in the [Item](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/) section.

---
##### jQuery

    <!--JavaScript-->
    var funnelItems = $("#funnelContainer").dxFunnel("getAllItems");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxFunnelModule, DxFunnelComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxFunnelComponent) funnel: DxFunnelComponent;
        funnelItems: any = [];
        getFunnelItems() {
            this.funnelItems = this.funnel.instance.getAllItems();
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

You can also access a funnel item in the event handlers. For example, the [onItemClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onItemClick) event handler gets the clicked item in the argument.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            onItemClick: function (e) {
                var item = e.item;
                // ...
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
            let item = e.item;
            // ...
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

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)