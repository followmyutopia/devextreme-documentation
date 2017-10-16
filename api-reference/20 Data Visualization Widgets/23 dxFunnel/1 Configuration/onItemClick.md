<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\itemClick.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(e) | String<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **itemClick** event. Executed when a user clicks a funnel item.
<!--/shortDescription-->

<!--fullDescription-->
The **onItemClick** event handler is often used to implement item selection as shown in the following code:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#funnelContainer").dxFunnel({
            // ...
            onItemClick: function (e) {
                e.item.select(!e.item.isSelected())
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel ...
        (onItemClick)="selectItem($event)">
    </dx-funnel>

    <!--TypeScript-->
    export class AppComponent {
        selectItem (e) {
            e.item.select(!e.item.isSelected())
        }
    }

---

#####See Also#####
- [selectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#selectionMode)
- [onSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onSelectionChanged)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The [widget's instance]({basewidgetpath}/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->jQueryEvent<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->jQuery.Event<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The original jQuery event.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->item<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxfunnelItem<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The [Item](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/) object.
<!--/typeFunctionParamDescription1_field4-->
