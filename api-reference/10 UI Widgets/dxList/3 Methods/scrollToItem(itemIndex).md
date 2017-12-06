===================================================================
===================================================================

<!--shortDescription-->
Scrolls the list to the specified item.
<!--/shortDescription-->

<!--paramName1-->itemIndex<!--/paramName1-->
<!--paramType1-->Number|Object<!--/paramType1-->
<!--paramDescription1-->
The target element index.
<!--/paramDescription1-->

<!--fullDescription-->
If the widget displays a grouped list, specify the target item index using an object containing the following fields.

- **group**  
 Specifies the index of the group containing the target item.

- **item**  
 Specifies the item index within the specified group.

<!---->

    <!--JavaScript-->
    var list = $("#myList").dxList("instance");
    list.scrollToItem({
        group: 3,
        item: 8
    });

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [List - Scrolling API](/Documentation/Guide/Widgets/List/Scrolling/#API)
<!--/fullDescription-->