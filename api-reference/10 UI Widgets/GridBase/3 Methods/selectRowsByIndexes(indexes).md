<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Selects rows by indexes.
<!--/shortDescription-->

<!--paramName1-->indexes<!--/paramName1-->
<!--paramType1-->array<!--/paramType1-->
<!--paramDescription1-->
The indexes of the rows to be selected.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the rows are selected.
<!--/returnDescription-->

<!--fullDescription-->
This method has the following specifics:

- This method call clears selection of all previously selected rows.
- When calculating row indexes, the widget counts data and group rows. Nevertheless, only data rows can be selected.
- If the [pager]({basewidgetpath}/Configuration/pager/) is used, selection is cleared once a user moves to a different page. To preserve it, call this method within the [onContentReady]({basewidgetpath}/Configuration/#onContentReady) handler.

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [Initial and Runtime Selection](/Documentation/Guide/Widgets/DataGrid/Selection/#API/Initial_and_Runtime_Selection)
<!--/fullDescription-->