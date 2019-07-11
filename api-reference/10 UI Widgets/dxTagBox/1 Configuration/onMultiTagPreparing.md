<!--id-->dxTagBox.Options.onMultiTagPreparing<!--/id-->
<!--EventForAction-->dxTagBox.multiTagPreparing<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before the multi-tag is rendered.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/TagBox/TagCountLimitation/jQuery/Light/"
}

#####See Also#####
- [Limit the Tag Count](/Documentation/Guide/Widgets/TagBox/Limit_the_Tag_Count/)
- [maxDisplayedTags](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#maxDisplayedTags)
- [showMultiTagOnly](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showMultiTagOnly)
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
#include common-ref-elementparam with { element: "widget" }
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only when using Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->multiTagElement<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxElement<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
#include common-ref-elementparam with { element: "multi-tag" }
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->selectedItems<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Array<String, Number, Object><!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The currently selected items.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->text<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->String<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Allows you to change the multi-tag's text.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->cancel<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Boolean<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Allows you to cancel replacing ordinary tags with the multi-tag.
<!--/typeFunctionParamDescription1_field7-->
