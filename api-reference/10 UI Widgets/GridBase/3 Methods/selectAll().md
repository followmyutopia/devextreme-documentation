===================================================================
===================================================================

<!--shortDescription-->
Selects all rows. 
<!--/shortDescription-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after all rows are selected. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
Depending on the value of the [selectAllMode]({basewidgetpath}/Configuration/selection/#selectAllMode) option, this method selects all rows on all pages or on the currently rendered pages only. If a filter is applied, this method selects only those rows that meet the filtering conditions.

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [Initial and Runtime Selection](/Documentation/Guide/Widgets/DataGrid/Selection/#API/Initial_and_Runtime_Selection)
- [selectRows(keys, preserve)]({basewidgetpath}/Methods/#selectRowskeys_preserve) 
- [selection]({basewidgetpath}/Configuration/selection/)
<!--/fullDescription-->