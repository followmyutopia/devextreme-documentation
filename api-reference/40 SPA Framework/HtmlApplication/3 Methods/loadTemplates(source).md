<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Adds a specified HTML template to a collection of view or layout templates.
<!--/shortDescription-->

<!--paramName1-->source<!--/paramName1-->
<!--paramType1-->string|jQuery<!--/paramType1-->
<!--paramDescription1-->
A string containing the URI of the HTML page or a jQuery object presenting a template markup.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the template is loaded or rejected after loading failed. It is a [jQuery.Promise](http://api.jquery.com/Types/#Promise) if the [useJQuery](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#useJQuery) flag is enabled and a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) otherwise.
<!--/returnDescription-->

<!--fullDescription-->
Use this method to provide an HTML template for a view or layout dynamically. When a template for this view/layout is required, the loaded template will be found in the collection of view/layout templates.

The markup that is passed as the method's parameter should be defined using the [dxView](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/)/[dxLayout](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxLayout/) markup components in the same manner as a view/layout that is defined statically.

    <!--HTML-->
    <div data-options="dxView : { name: 'MyView', title: 'My view'  } ">
        <div data-options="dxContent : { targetPlaceholder: 'content' } ">
            ...
        </div>
    </div>

<!--->

    <!--HTML-->
    <div data-options="dxLayout: { name:'default', platform:'ios' }">
        ...
    </div>

#####See Also#####
- [SPA Framework - Views and Layouts](/Documentation/Guide/SPA_Framework/Views_and_Layouts)
- [SPA Framework - Create a View Dynamically](/Documentation/Tutorial/SPA_Framework/Create_a_View_Dynamically#Create_a_View_Dynamically)

[note]If more than one view/layout template is found, an exception will be raised. So, check to see that there are no templates for a view/layout when you add a template dynamically. Use the [getViewTemplate](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#getViewTemplateviewName) and [getViewTemplateInfo](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#getViewTemplateInfoviewName) methods to find a view template in a template collection.

<!--/fullDescription-->