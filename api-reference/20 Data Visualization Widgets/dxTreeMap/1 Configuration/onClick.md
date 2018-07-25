<!--EventForAction-->..\4 Events\click.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e) | String<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when a node is clicked or tapped.
<!--/shortDescription-->

<!--fullDescription-->
This function is often used to implement item selection as shown in the following code:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeMapContainer").dxTreeMap({
            // ...
            onClick: function (e) {
                e.node.select(!e.node.isSelected());
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-map ...
        (onClick)="selectItem($event)">
    </dx-tree-map>

    <!--TypeScript-->
    import { DxTreeMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectItem (e) {
            e.node.select(!e.node.isSelected());
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeMapModule
        ],
        // ...
    })

---

To identify whether the clicked node is a single tile or a group of tiles, use the node's [isLeaf()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isLeaf) method.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQuery.Event<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamDeprecated1_field4-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field4-->
<!--typeFunctionParamName1_field5-->event<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->event<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->node<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->dxTreeMapNode<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The clicked node; described in the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) section.
<!--/typeFunctionParamDescription1_field6-->
