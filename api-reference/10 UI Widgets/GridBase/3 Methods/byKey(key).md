<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Allows you to obtain a data object by its key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->object|string|number<!--/paramType1-->
<!--paramDescription1-->
The key value of the required data object.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the data object has been loaded. 
<!--/returnDescription-->

<!--fullDescription-->
The following code shows how to get a data object whose key is 15.

    <!--JavaScript-->
    widgetInstance.byKey(15).done(function(dataObject) {
            // process "dataObject"
        }).fail(function(error) {
            // handle error
        });

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [instance()]({basewidgetpath}/Methods/#instance)
<!--/fullDescription-->