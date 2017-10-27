<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Moves the specified item to the specified position in the list.
<!--/shortDescription-->

<!--paramName1-->itemElement<!--/paramName1-->
<!--paramType1-->Node<!--/paramType1-->
<!--paramDescription1-->
The DOM node of the item to be moved.
<!--/paramDescription1-->

<!--paramName2-->toItemElement<!--/paramName2-->
<!--paramType2-->Node<!--/paramType2-->
<!--paramDescription2-->
The DOM node of the item after which the specified item should be placed.
<!--/paramDescription2-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved if the item is moved and rejected otherwise. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
[note]This method reorders items in the [items](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#items) array, but it does not affect the [dataSource](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource).

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [List - Item Reordering API](/Documentation/Guide/Widgets/List/Item_Reordering/#API)
<!--/fullDescription-->