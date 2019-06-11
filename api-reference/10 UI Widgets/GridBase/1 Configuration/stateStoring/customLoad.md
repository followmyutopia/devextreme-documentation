<!--id-->GridBase.Options.stateStoring.customLoad<!--/id-->
===========================================================================
<!--type-->function()<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a function that is executed on state loading. Applies only if the [type]({basewidgetpath}/Configuration/stateStoring/#type) is *'custom'*.
<!--/shortDescription-->

<!--fullDescription-->
Use the **customSave** and **customLoad** functions to manually implement state storing: in **customSave**, save the state to a custom storage; in **customLoad**, load it. You can also adjust the state in both functions. See an example in the [customSave]({basewidgetpath}/Configuration/stateStoring/#customSave) topic.
<!--/fullDescription-->
<!--typeFunctionReturnType-->Promise<Object><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The widget state. As a rule, it is a state that you save within the [customSave]({basewidgetpath}/Configuration/stateStoring/#customSave) function.
<!--/typeFunctionReturnDescription-->