<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Displays the [load panel](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Load_Panel). 
<!--/shortDescription-->

<!--paramName1-->messageText<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
Text to be displayed in the load panel.
<!--/paramDescription1-->

<!--fullDescription-->
Normally, **DataGrid** displays a load panel automatically when it is busy rendering or loading data. Additionally, the load panel can be invoked when required by calling the **beginCustomLoading(messageText)** method. If you call this method without the argument, the load panel displays text specified by the **loadPanel** | [text]({basewidgetpath}/Configuration/loadPanel/#text) option. To specify the appearance of the load panel, use the properties of the [loadPanel]({basewidgetpath}/Configuration/loadPanel/) configuration object.

Once invoked in code, the load panel will not hide until the [endCustomLoading()]({basewidgetpath}/Methods/#endCustomLoading) method is called.

[note] The load panel invoked in code does not replace the automatically invoked load panel. This circumstance might lead to a situation where the load panel invoked in code suddenly changes its text because it was overridden by the automatically invoked load panel. Hence, be mindful when invoking the load panel with different text. 
<!--/fullDescription-->