===================================================================
===================================================================

<!--shortDescription-->
Displays the [load panel]({basewidgetpath}/Configuration/loadPanel/). 
<!--/shortDescription-->

<!--paramName1-->messageText<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
Text to be displayed in the load panel.
<!--/paramDescription1-->

<!--fullDescription-->
Normally, the load panel is invoked automatically while the widget is busy rendering or loading data. Additionally, you can invoke it by calling this method. If you call it without the argument, the load panel displays text specified by the **loadPanel**.[text]({basewidgetpath}/Configuration/loadPanel/#text) option. To specify the appearance of the load panel, use the [loadPanel]({basewidgetpath}/Configuration/loadPanel/) object. Once invoked from code, the load panel will not hide until you call the [endCustomLoading()]({basewidgetpath}/Methods/#endCustomLoading) method.

[note]The load panel invoked from code does not replace the automatically invoked load panel. This circumstance might lead to a situation where the load panel invoked from code suddenly changes its text because it was overridden by the automatically invoked load panel. Therefore, be mindful when invoking the load panel with different text. 

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->